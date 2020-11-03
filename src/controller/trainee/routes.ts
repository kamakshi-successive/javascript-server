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

// .get((req, res) => {console.log('Inside Get Routes'); res.send('Inside Get Route'); })
  // .post((req, res) => {console.log('Inside post Routes'); res.send('Inside post Route'); })
  // .put((req, res) => {console.log('Inside put Routes'); res.send('Inside put Route'); })
  //  .delete((req, res) => {console.log('Inside delete Routes'); res.send('Inside delete Route'); });
