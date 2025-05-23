import express from 'express';
import eventosController from '../controllers/eventosController.js';

const eventosRouter = express.Router();

eventosController.tablas.forEach((tabla) => {
  eventosRouter.get(`/${tabla}`, eventosController.getEventos(tabla));
  eventosRouter.post(`/${tabla}`, eventosController.createEvento(tabla));
  eventosRouter.put(`/${tabla}/:id`, eventosController.updateEvento(tabla));
  eventosRouter.delete(`/${tabla}/:id`, eventosController.deleteEvento(tabla));
});

export default eventosRouter;
