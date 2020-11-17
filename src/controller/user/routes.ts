import * as express from 'express';
import UserController from './Controller';
import { Router } from  'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/constants';

const UserRouter = express.Router();

UserRouter.get('/get', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validation.get),
    UserController.get);
UserRouter.post('/create', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validation.create),
    UserController.create);
UserRouter.put('/update', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validation.update),
    UserController.update);
UserRouter.delete('/:id', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validation.delete),
    UserController.remove);
UserRouter.post('/login', validationHandler(validation.login), UserController.login);
UserRouter.get('/me', authMiddleWare(permissions.getUsers, 'all'), UserController.me);



export default UserRouter;
