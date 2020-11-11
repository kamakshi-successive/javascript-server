import { traineeRouter } from './controller';
import { Router } from 'express';
import { UserRouter } from './controller/user/index';
// import userRouter from './controller/user';
const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', UserRouter);
// mainRouter.use('/user', userRouter);

export default mainRouter;
