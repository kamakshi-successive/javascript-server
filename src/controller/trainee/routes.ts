import { Router } from  'express';
import  TraineeController  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();
traineeRouter.route('/')
  .get(authMiddleWare('getUser', 'read'), validationHandler(validation.get), TraineeController.get)
  .post(TraineeController.create)
  .put(TraineeController.update)
  .delete(TraineeController.delete);

export default traineeRouter;
