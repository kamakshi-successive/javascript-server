import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../IRequest';
import SystemResponse from '../../libs/SystemResponse';
import IUserCreate from '../../repositories/entities/IUserCreate';

class UserController {
  static instance: UserController;
  static userRepository: UserRepository;
  userRepository = new UserRepository();
  static getInstance = () => {
    if (UserController.instance) {
      return UserController.instance;
    }
    UserController.instance = new UserController();
    return UserController.instance;
  }

  async encodedPassword(password: string) {
    const pass = await bcrypt.hash(password, 10);
    console.log('pass', pass);
    return pass;
}
get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log('-------------INSIDE LIST TRAINEE----------- ');
    const { skip, limit, sortby } = req.query;
    const countResult = await this.userRepository.count();
    const user = await this.userRepository.get(Number(skip), Number(limit), sortby);
    return SystemResponse.success(res, countResult, user, 'Users List');
  }
  catch (err) {
    return next({ error: err, message: err });
  }
};

// public async me(req: IRequest, res: Response, next: NextFunction) {
//         const id = req.query;
//         const user = new UserRepository();

//         await user.getUser({ id })
//             .then((data) => {
//                 res.status(200).send({
//                     message: 'User Fetched successfully',
//                     'data': { data },
//                     code: 200
//                 });
//             });
//     }


  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('-----------------CREATE TRAINEE USER----------------:');
      const users: IUserCreate = req.body;
      const password = users.password;
      const pass = await this.encodedPassword(password);
      await Object.assign(users, { password: pass });
      const user = await this.userRepository.create(users);
      return SystemResponse.success(res, user, 'trainee added sucessfully');
    } catch (err) {
      return next({ error: err, message: err });
    }
  };
    update = async (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log('------------INSIDE UPDATE TRAINEE-------------');
        const { id, dataToUpdate } = req.body;
        const user = await this.userRepository.update(id, dataToUpdate);
        return SystemResponse.success(res, user, 'Updated user');
      }
      catch (err) {
        return next({ error: err, message: err });
      }
    };
    delete = async (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log(' :::::::::: Inside Delete Trainee :::::::: ');
        const { id } = req.params;
        const user = await this.userRepository.delete({ id: id });
        return SystemResponse.success(res, user, 'User Deleted Successfully');
      } catch (err) {
        throw err;
      }
    };
  }
//     public async login(req: IRequest, res: Response, next: NextFunction) {
//         const { email } = req.body;
//         console.log('Inside User Controller login ');

//         const user = new UserRepository();

//         await user.getUser({ email })
//             .then((userData) => {
//                 if (userData === null) {
//                     res.status(404).send({
//                         err: 'User Not Found',
//                         code: 404
//                     });
//                     return;
//                 }

//                 const { password } = userData;


//                 if (!bcrypt.comparesync(req.body.password, password)) {
//                     res.status(401).send({
//                         err: 'Invalid Password',
//                         code: 401
//                     });
//                     return;
//                 }

//                 const token = jwt.sign(userData.toJSON(), config.KEY, {
//                   expiresIn: Math.floor(Date.now() / 1000) + ( 15 * 60),
//                 });
//                 res.send({
//                     message: 'Login Successfull',
//                     status: 200,
//                     'token': token
//                 });
//                 return;

//             });
//     }

export default new UserController();
