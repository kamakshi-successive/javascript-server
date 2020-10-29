import { Router } from 'express';
import { traineeRouter } from './controller';

const mainRouter = new Router();
mainRouter.use('./user', traineeRouter);

