// controller/login.js
import { getUserByUsernameAndEmail } from './user.js';

export const loginUser = (req, res) => {
  const { email, senha } = req.body;

  // Obtenha o usuário do banco de dados
  getUserByUsernameAndEmail(email, senha, (err, user) => {
    if (err) {
      console.error('Erro no login:', err);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }

    if (user) {
      const userId = user.id;
      console.log('Login bem-sucedido para o usuário com ID:', userId);
      res.json({ message: 'Login bem-sucedido!', userId });
    } else {
      console.log('Credenciais inválidas');
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });
};
