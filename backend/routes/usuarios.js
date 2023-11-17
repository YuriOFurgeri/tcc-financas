// routes/usuarios.mjs
import express from "express";
import * as usuariosController from "../controllers/usuario.js";

const router = express.Router();

router.post("/register", usuariosController.register);
router.post("/login", usuariosController.login);

export default router;
