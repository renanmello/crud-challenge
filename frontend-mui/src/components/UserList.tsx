import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUser } from '../services/apiService';

interface UserListProps {
  users: any[];
  setEditingUser: React.Dispatch<React.SetStateAction<any | null>>;
  setSnackbar: React.Dispatch<
    React.SetStateAction<{ open: boolean; message: string; severity: 'success' | 'error' }>
  >;
  fetchUsers: () => void; // Função para atualizar a tabela
}

const UserList: React.FC<UserListProps> = ({ users, setEditingUser, setSnackbar, fetchUsers }) => {
  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setSnackbar({ open: true, message: 'Usuário deletado com sucesso!', severity: 'success' });
      fetchUsers(); // Atualiza a tabela
    } catch (error) {
      setSnackbar({ open: true, message: 'Erro ao deletar usuário.', severity: 'error' });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Lista de Usuários
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => setEditingUser(user)} // Abre o formulário de edição
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserList;