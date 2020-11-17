import * as express from 'express';
import UserController from './Controller';
import { Router } from  'express';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { permissions, user } from '../../libs/constants';
const userRouter = express.Router();

userRouter.route('/')
// .get( UserController.get)
.post(authMiddleWare ( permissions.getUsers, 'read' ), UserController.create )
.put(authMiddleWare ( permissions.getUsers, 'read' ), UserController.update );
userRouter.route('/:id').delete( authMiddleWare ( permissions.getUsers, 'read' ), UserController.remove );
userRouter.route('/me')
.get(authMiddleWare ( permissions.getUsers, 'all' ), UserController.me);
userRouter.route('/login')
.post( validationHandler(config.login ) , UserController.login );

export default userRouter;
