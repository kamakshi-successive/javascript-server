import * as express from 'express';
import userController from './Controller';
import { Router } from  'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
const UserRouter = Router();
UserRouter.get('/', authMiddleWare('getUser1', 'read'), validationHandler(validation.get),
    userController.get)
    .post('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.create),
    userController.create)
    .put('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.update),
    userController.update)
    .delete('/', authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete),
    userController.delete)
    .post('/login', validationHandler(validation.login), userController.login)
    .get('/me', authMiddleWare('getUser1', 'all'), userController.me);


export default UserRouter;
