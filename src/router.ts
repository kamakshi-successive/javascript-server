import { Router } from 'express';
import { traineeRouter } from './controller';
import { userRouter } from './controller/user';

const mainRouter = Router();
mainRouter.use('/trainee', traineeRouter);
mainRouter.use('/user', userRouter);

export default mainRouter;
