import React from 'react';
import { Table, Button, Space, message } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteUser } from '../services/apiService';

interface UserListProps {
  users: any[]; // Adiciona a propriedade users
  setEditingUser: React.Dispatch<any>;
  fetchUsers: () => void;
}

const UserList: React.FC<UserListProps> = ({ users, setEditingUser, fetchUsers }) => {
  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      message.success('Usuário deletado com sucesso!');
      fetchUsers(); // Atualiza a tabela
    } catch (error) {
      message.error('Erro ao deletar usuário.');
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Ações',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => setEditingUser(record)}
          >
            Editar
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Deletar
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default UserList;