import * as express from 'express';
import UserController from './Controller';
import { Router } from  'express';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
// const UserRouter = Router();
//     UserRouter.get('/', authMiddleWare('getUser1', 'read'), validationHandler(validation.get),
//     userUserController.get)
//     .post('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.create),
//     userUserController.create)
//     .put('/', authMiddleWare('getUser1', 'write'), validationHandler(validation.update),
//     userUserController.update)
//     .delete('/', authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete),
//     userUserController.delete)
//     .post('/login', validationHandler(validation.login), userUserController.login)
//     .get('/me', authMiddleWare('getUser1', 'all'), userUserController.me);


// export default UserRouter;
// import { Router } from 'express';
// import UserController from './UserController';
// import validation from './validation';
// import validationHandler from '../../libs/validationHandler';
// import authMiddleWare from '../../libs/routes/authMiddleWare';

const userRoute: Router = Router();

userRoute.post('/create', authMiddleWare('getUsers', 'write'), validationHandler(validation.create), UserController.create);
userRoute.post('/login', validationHandler(validation.login), UserController.login);
userRoute.get('/me', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.me);
userRoute.get('/getall', authMiddleWare('getUsers', 'read'), validationHandler(validation.get), UserController.getAll);

userRoute.put('/update', authMiddleWare('getUsers', 'write'), validationHandler(validation.update), UserController.update);
userRoute.delete('/remove/:id', authMiddleWare('getUsers', 'delete'), validationHandler(validation.delete), UserController.remove);


export default userRoute;
