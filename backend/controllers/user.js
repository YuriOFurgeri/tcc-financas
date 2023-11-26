// controller/user.js
import db from '../db.js';

export const getAllUsers = (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

export const getUserById = (req, res) => {
  const userId = req.params.id;

  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error('Erro ao obter usuário por ID:', err);
      return res.status(500).json({ error: 'Erro interno no servidor', details: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(result[0]);
  });
};

// Adicione esta função no seu arquivo controller/user.js
export const alterarSenha = (req, res) => {
  const userId = req.params.id;
  const novaSenha = req.body.novaSenha;

  db.query('UPDATE users SET senha = ? WHERE id = ?', [novaSenha, userId], (err, result) => {
    if (err) {
      console.error('Erro ao alterar senha:', err);
      return res.status(500).json({ error: 'Erro interno no servidor' });
    }

    res.json({ message: 'Senha alterada com sucesso!' });
  });
};



export const registerUser = (req, res) => {
  const { email, senha } = req.body;

  db.query('INSERT INTO users (email, senha) VALUES (?, ?)', [email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao registrar usuário:', err);
      return res.status(500).json({ error: 'Erro interno no servidor', details:err.message });
    }

    console.log('Usuário registrado com sucesso!');
    res.json({ message: 'Usuário registrado com sucesso!' });
  });
};


// controller/user.js
export const getUserByUsernameAndEmail = (email, senha, callback) => {
    db.query('SELECT * FROM users WHERE email = ? AND senha = ?', [email, senha], (err, result) => {
      if (err) {
        console.error('Erro ao obter usuário:', err);
        return callback(err, null);
      }
  
      return callback(null, result[0]);
    });
  };
  
  export const excluirUsuario = (req, res) => {
    const userId = req.params.id;
  
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
      if (err) {
        console.error(`Erro ao excluir usuário ${userId}:`, err);
        return res.status(500).json({ error: 'Erro interno no servidor' });
      }
  
      res.json({ message: `Usuário ${userId} excluído com sucesso!` });
    });
  };