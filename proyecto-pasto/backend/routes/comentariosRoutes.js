import express from 'express';
import { obtenerComentarios, crearComentario, eliminarComentario } from '../controllers/comentariosController.js';

const comentariosRoutes = express.Router();

comentariosRoutes.get('/:tipo_evento', obtenerComentarios);
comentariosRoutes.post('/', crearComentario);

// Ruta para eliminar un comentario por ID
comentariosRoutes.delete('/:id', eliminarComentario);

export default comentariosRoutes;
