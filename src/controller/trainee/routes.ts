import { Router } from  'express';
import  TraineeController  from './Controller';
import validationHandler from '../../libs/validationHandler';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')

    .get(authMiddleWare('getUser', 'read'), validationHandler(config.get), TraineeController.get)
    .post(authMiddleWare('getUser', 'write'), validationHandler(config.create), TraineeController.create)
    .put(authMiddleWare('getUser', 'write'), validationHandler(config.update), TraineeController.update)
    .delete(authMiddleWare('getUser', 'delete'), validationHandler(config.delete), TraineeController.delete);
export default traineeRouter;
