import * as express from 'express';
import userController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleWare';
const UserRouter = express.Router();

UserRouter.get('/', authMiddleWare('getUser1', 'read'), validationHandler(validation.get),
    userController.get);

UserRouter.post('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.create),
    userController.create);

UserRouter.put('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.update),
    userController.update);

UserRouter.delete('/:id', authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete),
    userController.delete);

UserRouter.post('/login', validationHandler(validation.login), userController.login);

UserRouter.get('/me', authMiddleWare('getUser1', 'all'), userController.me);


export default UserRouter;
