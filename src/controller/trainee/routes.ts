import { Router } from  'express';
import  TraineeController  from './Controller';
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();

traineeRouter.route('/')
    .get(authMiddleWare('getUser1', 'read'), validationHandler(validation.get), TraineeController.get)
    .post(authMiddleWare('getUser1', 'write'), validationHandler(validation.create), TraineeController.create)
    .put(authMiddleWare('getUser2', 'write'), validationHandler(validation.update), TraineeController.update)
    .delete(authMiddleWare('getUser1', 'delete'), validationHandler(validation.delete), TraineeController.delete);
export default traineeRouter;

// .get((req, res) => {console.log('Inside Get Routes'); res.send('Inside Get Route'); })
  // .post((req, res) => {console.log('Inside post Routes'); res.send('Inside post Route'); })
  // .put((req, res) => {console.log('Inside put Routes'); res.send('Inside put Route'); })
  //  .delete((req, res) => {console.log('Inside delete Routes'); res.send('Inside delete Route'); });
