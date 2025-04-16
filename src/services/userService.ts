import { getDbConnection } from "../db/database";

// Função para criar um novo usuário
export const createUser = async (name: string, email: string) => {
    const db = await getDbConnection();
    const result = await db.run(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    return result.lastID;
  };
  
  // Função para listar todos os usuários
  export const getAllUsers = async () => {
    const db = await getDbConnection();
    const users = await db.all('SELECT * FROM users');
    return users;
  };
  
  // Função para buscar um usuário pelo ID
  export const getUserById = async (id: number) => {
    const db = await getDbConnection();
    const user = await db.get('SELECT * FROM users WHERE id = ?', [id]);
    return user;
  };
  
  // Função para atualizar um usuário
  export const updateUser = async (id: number, name: string, email: string) => {
    const db = await getDbConnection();
    await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [
      name,
      email,
      id,
    ]);
  };
  
  // Função para deletar um usuário
  export const deleteUser = async (id: number) => {
    const db = await getDbConnection();
    await db.run('DELETE FROM users WHERE id = ?', [id]);
  };
