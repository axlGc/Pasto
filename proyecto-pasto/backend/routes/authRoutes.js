import { Router } from 'express';
import authController from '../controllers/authController.js';

const authRouter = Router();


authRouter.get('/prueba', authController.prueba); // <-- Corrige aquí

// Registro de usuario
authRouter.post('/register', authController.register);

// Login de usuario
authRouter.post('/login', authController.login);

export default authRouter;