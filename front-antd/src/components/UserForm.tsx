import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { createUser, updateUser } from '../services/apiService';

const UserForm: React.FC<{
  editingUser: any | null;
  setEditingUser: any;
  fetchUsers: () => void;
}> = ({ editingUser, setEditingUser, fetchUsers }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingUser) {
      form.setFieldsValue(editingUser);
    } else {
      form.resetFields();
    }
  }, [editingUser]);

  const handleSubmit = async (values: any) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, values.name, values.email);
        notification.success({
          message: 'Sucesso',
          description: 'Usuário atualizado com sucesso!',
          placement: 'topRight',
        });
      } else {
        await createUser(values.name, values.email);
        notification.success({
          message: 'Sucesso',
          description: 'Usuário criado com sucesso!',
          placement: 'topRight',
        });
      }
      fetchUsers(); // Atualiza a tabela
      form.resetFields(); // Limpa os campos
      setEditingUser(null); // Sai do modo de edição
    } catch (error) {
      notification.error({
        message: 'Erro',
        description: 'Erro ao salvar usuário.',
        placement: 'topRight',
      });
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        label="Nome"
        name="name"
        rules={[{ required: true, message: 'Por favor, insira o nome!' }]}
      >
        <Input placeholder="Nome" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Por favor, insira o email!' },
          { type: 'email', message: 'Insira um email válido!' },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {editingUser ? 'Atualizar' : 'Salvar'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;