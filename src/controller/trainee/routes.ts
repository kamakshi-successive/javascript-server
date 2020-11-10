import { Router } from  'express';
import  TraineeController  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

<<<<<<< HEAD
traineeRouter.route('/')
    .get(authMiddleWare('getUser1', 'read'), validationHandler(validation.get), TraineeController.get)
    .post(authMiddleWare('getUser1', 'write'), validationHandler(validation.create), TraineeController.create)
    .put(authMiddleWare('getUser2', 'write'), validationHandler(validation.update), TraineeController.update)
    .delete(authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete), TraineeController.delete);
=======
// =======
//     // .get(authMiddleWare('getUser1', 'read'), validationHandler(validation.get), TraineeController.get)
//     .post(authMiddleWare('getUser', 'read'), validationHandler(validation.create), TraineeController.create);
//     // .put(authMiddleWare('getUser2', 'write'), validationHandler(validation.update), TraineeController.update)
//     // .delete(authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete), TraineeController.delete);
// >>>>>>> 54b4b6bf60688451b84b99627626a6e74f83588a
>>>>>>> c67e7c8b9495424db9846ee7b9bad997034876fd
export default traineeRouter;
