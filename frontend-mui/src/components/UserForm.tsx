import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { createUser, updateUser } from '../services/apiService';

interface UserFormProps {
  editingUser: any | null;
  setEditingUser: React.Dispatch<React.SetStateAction<any | null>>;
  setSnackbar: React.Dispatch<
    React.SetStateAction<{ open: boolean; message: string; severity: 'success' | 'error' }>
  >;
  fetchUsers: () => void; // Função para atualizar a tabela
}

const UserForm: React.FC<UserFormProps> = ({ editingUser, setEditingUser, setSnackbar, fetchUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await updateUser(editingUser.id, name, email);
        setSnackbar({ open: true, message: 'Usuário atualizado com sucesso!', severity: 'success' });
      } else {
        await createUser(name, email);
        setSnackbar({ open: true, message: 'Usuário criado com sucesso!', severity: 'success' });
      }
      fetchUsers(); // Atualiza a tabela
      setName(''); // Limpa o campo de nome
      setEmail(''); // Limpa o campo de email
      setEditingUser(null); // Limpa o estado de edição
    } catch (error) {
      setSnackbar({ open: true, message: 'Erro ao salvar usuário.', severity: 'error' });
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, my: 4 }}>
      <Typography variant="h6" gutterBottom>
        {editingUser ? 'Editar Usuário' : 'Cadastrar Usuário'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editingUser ? 'Atualizar' : 'Salvar'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;