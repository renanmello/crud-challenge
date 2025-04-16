import { Request, Response } from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../services/userService';

// Criar um novo usuário
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const userId = await createUser(name, email);
    res.status(201).json({ id: userId, name, email });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};

// Listar todos os usuários
export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};

// Buscar um usuário pelo ID
export const getUserByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(Number(id));
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

// Atualizar um usuário
export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    await updateUser(Number(id), name, email);
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
};

// Deletar um usuário
export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUser(Number(id));
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
};