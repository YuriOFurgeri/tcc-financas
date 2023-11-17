import express from "express";
import { getMovimentacoes, addMovimentacao, updateMovimentacao, deleteMovimentacao} from "../controllers/movimentacao.js";

const router = express.Router();

router.get("/", getMovimentacoes);
router.post("/", addMovimentacao);
router.put("/:id", updateMovimentacao);
router.delete("/:id", deleteMovimentacao);


export default router;