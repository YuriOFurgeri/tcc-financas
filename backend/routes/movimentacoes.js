import express from "express";
//import { getMovimentacoes, addMovimentacao, updateMovimentacao, deleteMovimentacao} from "../controllers/movimentacao.js";
//outra forma de importar
import * as movimentacaoController from '../controllers/movimentacao.js';

//import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();
/*
router.get("/",verifyToken, getMovimentacoes);
router.post("/",verifyToken, addMovimentacao);
router.put("/:id",verifyToken, updateMovimentacao);
router.delete("/:id",verifyToken, deleteMovimentacao);

router.get("/", getMovimentacoes);
router.post("/", addMovimentacao);
router.put("/:id", updateMovimentacao);
router.delete("/:id", deleteMovimentacao);
*/
router.get('/', movimentacaoController.getMovimentacoes);
router.post('/', movimentacaoController.addMovimentacao);
router.put('/:id', movimentacaoController.updateMovimentacao);
router.delete('/:id', movimentacaoController.deleteMovimentacao);


export default router;