import * as express from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validationConfig from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions } from '../../libs/constants';

const UserRouter = express.Router();

UserRouter.get('/', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validationConfig.get),
    UserController.getAll);
UserRouter.post('/create', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validationConfig.create),
    UserController.create);
UserRouter.put('/update', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validationConfig.update),
    UserController.update);
UserRouter.delete('/:id', authMiddleWare(permissions.getUsers, 'read'), validationHandler(validationConfig.delete),
    UserController.delete);
UserRouter.post('/login', validationHandler(validationConfig.login), UserController.login);
UserRouter.get('/me', authMiddleWare(permissions.getUsers, 'all'), UserController.me);

export default UserRouter;
