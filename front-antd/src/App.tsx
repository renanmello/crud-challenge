import React, { useEffect, useState } from 'react';
import { Layout, Typography } from 'antd';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { getAllUsers } from './services/apiService';

const { Content } = Layout;

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingUser, setEditingUser] = useState<any | null>(null);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', padding: '24px' }}>
      <Content>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          CRUD com Ant Design
        </Typography.Title>
        <UserForm editingUser={editingUser} setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
        <UserList users={users} setEditingUser={setEditingUser} fetchUsers={fetchUsers} />
      </Content>
    </Layout>
  );
}

export default App;