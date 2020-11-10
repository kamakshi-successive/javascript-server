<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { userModel } from '../../repositories/user/UserModel';
import IRequest from '../../IRequest';

class UserController {
  instance: UserController;
  static instance: any;

  static getInstance() {
    if (UserController.instance) {
      return UserController.instance;
    }


    UserController.instance = new UserController();
    return UserController.instance;
  }

  get(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('Inside get method of User Controller');

      res.send({
        message: 'User fetched successfully',
        data: [
          {
            name: 'User1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in fetching user',
        code: 500,
        message: err
      });
    }
  }

  create(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('Inside post method of User Controller');

      res.send({
        message: 'Users created successfully',
        data: [
          {
            name: 'User1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in creating user',
        code: 500,
        message: err
      });
    }
  }

  update(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('Inside update method of User Controller');

      res.send({
        message: 'Users updated successfully',
        data: [
          {
            name: 'User1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in updating user',
        code: 500,
        message: err
      });
    }
  }

  delete(req: Request , res: Response , next: NextFunction) {
    try {
      console.log('Inside delete method of User Controller');

      res.send({
        message: 'Users deleted successfully',
        data: [
          {
            name: 'User1',
            address: 'Noida'
          }
        ]
      });
    } catch (err) {
      console.log('Inside err', err);
      next({
        error: 'Error Occured in deleting user',
        code: 500,
        message: err
      });
    }
  }

  me(req: IRequest, res: Response, next: NextFunction) {
    const data = req.userData;
    res.json({
      data
    });
  }

login(req: Request, res: Response, next: NextFunction) {
  console.log('Inside User Controller Login',req.body);
  const {email, password} = req.body;
  console.log(email, password);
  userModel.findOne({email}, (err, result) => {
    if (result) {
      if (password === result.password) {
        console.log('result is', result);
        const token = jwt.sign(result.toJSON(), 'qwertyuiopasdfghjklzxcvbnm123456');
        res.send({
          data: token,
          message: 'login successfully',
        });
      }
      else {
        next({
          message: 'Incorrect password',
        });
      }
    }
    else {
      res.send({
        message: 'Incorrect Email',
      });
    }
  });
}

}


export default new UserController();
=======
>>>>>>> c67e7c8b9495424db9846ee7b9bad997034876fd
