// routes/usuarios.mjs
import express from "express";
//import jwt from 'jsonwebtoken';
import * as usuariosController from "../controllers/usuario.js";

const router = express.Router();

/*
router.post("/register", usuariosController.register);
router.post("/login", usuariosController.login);
*/

router.post('/register', usuariosController.register);

/*
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usuariosController.login(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const userId = user.idusuarios;

    // Gera um token de autenticação
    const accessToken = jwt.sign({ userId }, 'segredo', { expiresIn: '1h' });

    res.json({ accessToken });
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    res.status(500).json({ message: 'Erro interno ao realizar login' });
  }
});
*/
router.post('/login', usuariosController.login);

export default router;
