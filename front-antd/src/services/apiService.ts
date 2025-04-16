import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL base da API
});

// Função para criar um usuário
export const createUser = async (name: string, email: string) => {
  const response = await api.post('/users', { name, email });
  return response.data;
};

// Função para listar todos os usuários
export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Função para buscar um usuário pelo ID
export const getUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Função para atualizar um usuário
export const updateUser = async (id: number, name: string, email: string) => {
  const response = await api.put(`/users/${id}`, { name, email });
  return response.data;
};

// Função para deletar um usuário
export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};