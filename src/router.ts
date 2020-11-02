import { traineeRouter } from './controller';
import { Router } from 'express';

const mainRouter = Router();

mainRouter.use('/trainee', traineeRouter);

export default mainRouter;
