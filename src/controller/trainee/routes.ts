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

// =======
//     // .get(authMiddleWare('getUser1', 'read'), validationHandler(validation.get), TraineeController.get)
//     .post(authMiddleWare('getUser', 'read'), validationHandler(validation.create), TraineeController.create);
//     // .put(authMiddleWare('getUser2', 'write'), validationHandler(validation.update), TraineeController.update)
//     // .delete(authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete), TraineeController.delete);
// >>>>>>> 54b4b6bf60688451b84b99627626a6e74f83588a
export default traineeRouter;
