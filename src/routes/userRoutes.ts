import express from 'express';
import {
  createUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from '../controllers/userController';

const router = express.Router();

// Rota para criar um novo usuário
router.post('/users', createUserHandler);

// Rota para listar todos os usuários
router.get('/users', getAllUsersHandler);

// Rota para buscar um usuário pelo ID
router.get('/users/:id', getUserByIdHandler as any);

// Rota para atualizar um usuário
router.put('/users/:id', updateUserHandler);

// Rota para deletar um usuário
router.delete('/users/:id', deleteUserHandler);

export default router;