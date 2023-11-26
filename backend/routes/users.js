// routes/users.js
import express from 'express';
import * as userController from '../controllers/user.js';
import { loginUser } from '../controllers/login.js';

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/login', loginUser);

router.post('/register', userController.registerUser);
router.get('/:id', userController.getUserById); // Adicionada esta linha
// Adicione esta rota no seu arquivo routes/users.js
router.put('/:id/alterar-senha', userController.alterarSenha);

router.delete('/:id', userController.excluirUsuario);



export default router;
