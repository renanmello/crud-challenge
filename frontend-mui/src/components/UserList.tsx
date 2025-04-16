import React, { useEffect, useState } from 'react';
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
  TablePagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getAllUsers, deleteUser } from '../services/apiService';

interface UserListProps {
  setEditingUser: React.Dispatch<React.SetStateAction<any | null>>;
  fetchUsers: () => void;
}

const UserList: React.FC<UserListProps> = ({ setEditingUser, fetchUsers }) => {
  // Estado para armazenar os usuários recebidos da API
  const [users, setUsers] = useState<any[]>([]);

  // Estado para controle de paginação
  const [page, setPage] = useState(0); // Página atual
  const [rowsPerPage, setRowsPerPage] = useState(5); // Itens por página

  // Função para buscar todos os usuários
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const data = await getAllUsers(); // Busca os dados da API
        console.log('Dados recebidos:', data); // Depuração: Verifica os dados no console
        setUsers(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };
    fetchUsersData();
  }, []);

  // Função para deletar um usuário
  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id); // Chama a função de exclusão na API
      alert('Usuário deletado com sucesso!');
      fetchUsers(); // Atualiza a lista após a exclusão
    } catch (error) {
      alert('Erro ao deletar usuário.');
    }
  };

  // Função para mudar de página
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage); // Atualiza a página atual
  };

  // Função para alterar o número de itens por página
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Atualiza o número de itens por página
    setPage(0); // Volta para a primeira página ao alterar o número de itens
  };

  // Filtra os usuários para exibir apenas os da página atual
  const paginatedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      {/* Título da tabela */}
      <Typography variant="h6" gutterBottom>
        Lista de Usuários
      </Typography>

      {/* Container da tabela */}
      <TableContainer>
        <Table>
          {/* Cabeçalho da tabela */}
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>

          {/* Corpo da tabela */}
          <TableBody>
            {/* Verifica se há usuários para exibir */}
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {/* Botões de edição e exclusão */}
                    <IconButton color="primary" onClick={() => setEditingUser(user)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              // Mensagem de fallback se não houver usuários
              <TableRow>
                <TableCell colSpan={4} align="center">
                  Nenhum usuário encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Componente de paginação */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]} // Opções de itens por página
        component="div"
        count={users.length} // Total de itens
        rowsPerPage={rowsPerPage} // Itens por página atual
        page={page} // Página atual
        onPageChange={handleChangePage} // Função para mudar de página
        onRowsPerPageChange={handleChangeRowsPerPage} // Função para alterar o número de itens por página
      />
    </Paper>
  );
};

export default UserList;