import express from 'express';
import { edit, logout, remove, see } from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/:id', see);
userRouter.get('/logout', logout);
userRouter.get('/edit', edit);
userRouter.get('/delete', remove);

export default userRouter;
