import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import eventosRoutes from './routes/eventosRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import comentariosRoutes from './routes/comentariosRoutes.js';
// Si tienes más rutas, impórtalas aquí

const app = express();

app.use(express.json());
app.use(cors());

// Rutas
app.use('/auth', authRoutes);
app.use('/eventos', eventosRoutes);
app.use('/users', usersRoutes);
app.use('/comentarios', comentariosRoutes);
// Agrega más rutas si las tienes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
