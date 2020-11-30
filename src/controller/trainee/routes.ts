import { Router } from  'express';
import  TraineeController  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validationConfig from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')

    .get(authMiddleWare('getUser', 'read'), validationHandler(validationConfig.get), TraineeController.get)
    .post(authMiddleWare('getUser', 'write'), validationHandler(validationConfig.create), TraineeController.create)
    .put(authMiddleWare('getUser', 'write'), validationHandler(validationConfig.update), TraineeController.update)
    .delete(authMiddleWare('getUser', 'delete'), validationHandler(validationConfig.delete), TraineeController.delete);

export default traineeRouter;
