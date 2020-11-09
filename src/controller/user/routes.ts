import * as express from 'express';
import userController from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleware from '../../libs/routes/authMiddleWare';
const UserRouter = express.Router();

UserRouter.route('/login')

.post(validationHandler(validation.login), userController.login);

UserRouter.route('/me')
.get(authMiddleware('getUser', 'all'), userController.me);


export default UserRouter;
