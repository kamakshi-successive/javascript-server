import { traineeRouter } from './controller';
import { Router } from 'express';
import { userRouter } from './controller/user/index';
// import userRouter from './controller/user';
const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);
// mainRouter.use('/user', userRouter);

export default mainRouter;
