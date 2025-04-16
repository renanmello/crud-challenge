import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getAllUsers } from './services/apiService';
import '@ant-design/v5-patch-for-react-19';

const { Content } = Layout;

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any | null>(null);

  // Função para buscar todos os usuários
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  // Busca os usuários ao montar o componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', padding: '24px' }}>
      <Content>
        {/* Título centralizado */}
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          CRUD com Ant Design
        </Typography.Title>

        {/* Formulário para criar/editar usuários */}
        <UserForm
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          fetchUsers={fetchUsers}
        />

        {/* Lista de usuários */}
        <UserList
          users={users}
          setEditingUser={setEditingUser}
          fetchUsers={fetchUsers}
        />
      </Content>
    </Layout>
  );
}

export default App;