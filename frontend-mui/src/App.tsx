import React, { useState } from 'react';
import { Box, Container, Typography, Snackbar, Alert } from '@mui/material';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getAllUsers } from './services/apiService';

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any | null>(null);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      setSnackbar({ open: true, message: 'Erro ao carregar usuários.', severity: 'error' });
    }
  };

  // Carrega os usuários ao montar o componente
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main' }}>
          CRUD com Material-UI
        </Typography>
        <UserForm
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          setSnackbar={setSnackbar}
          fetchUsers={fetchUsers}
        />
        <UserList
          users={users}
          setEditingUser={setEditingUser}
          setSnackbar={setSnackbar}
          fetchUsers={fetchUsers}
        />
      </Container>

      {/* Snackbar para notificações */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;