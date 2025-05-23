import { Router } from 'express';
import  usersController from '../controllers/usersController.js';
import { deleteUser } from '../controllers/usersController.js';
import { changeUserRole } from '../controllers/usersController.js';


const userRouter = Router();

userRouter.get('/listaUsuarios', usersController.getAllUsers);

userRouter.delete('/listaUsuarios/:id', deleteUser);

userRouter.put('/listaUsuarios/:id/rol', changeUserRole);

export default userRouter;