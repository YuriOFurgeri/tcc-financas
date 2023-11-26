import express from 'express';
import * as eventosController from '../controllers/evento.js';
//import { getEventos, addEvento, updateEvento, deleteEvento } from '../controllers/eventos.js';

const router = express.Router();

router.get('/', eventosController.getEventos);
router.post('/', eventosController.addEvento);
router.put('/:id', eventosController.updateEvento);
router.delete('/:id', eventosController.deleteEvento);

export default router;
