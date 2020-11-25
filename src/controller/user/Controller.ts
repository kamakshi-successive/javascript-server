import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../IRequest';

class UserController {
  public async get(req: Request, res: Response, next: NextFunction) {

    const user = new UserRepository();
    const { id } = req.query;

    await user.getUser({ id })
        .then((data) => {
            if (data === null) {
                throw undefined;
            }

            res.status(200).send({
                message: 'User Fetched successfully',

                data,

                code: 200
            });

        })
        .catch(err => {
            console.log(err);
            res.send({
                error: 'User not found',
                code: 500
            });
        });

}

public async getAll(req: Request, res: Response, next: NextFunction) {

  const user = new UserRepository();

try {
  const result = await user.getAllUser({ });
  {
      if (result === null) {
          throw undefined;
      }

      res.status(200).send({
          message: 'User Fetched successfully',

          result,

          code: 200
      });

  }
    } catch (err) {
          console.log(err);
          res.send({
              error: 'User not found',
              code: 500
          });
      }
    }


public async me(req: IRequest, res: Response, next: NextFunction) {
        const id = req.query;
        const user = new UserRepository();

        await user.getUser({ id })
            .then((data) => {
                res.status(200).send({
                    message: 'User Fetched successfully',
                    'data': { data },
                    code: 200
                });
            });
    }

    public async create(req: IRequest, res: Response, next: NextFunction) {
        const { id, email, name, role, password } = req.body;
        const creator = req.userData._id;
        const user = new UserRepository();
         try {
            const result = await user.createUser({id, email, name, role, password }, creator);
                console.log(req.body);
                res.send({
                    message: 'User Created Successfully!',
                    result: {
                        'id': id,
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            }
            catch (err) {
              console.log(err);
              res.send({
                  error: 'Value not given properly',
                  code: 500
              });
          }
    }

    public async update(req: IRequest, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        console.log('id', id);
        console.log('dataToUpdate', dataToUpdate);
        const updator = req.userData._id;
        const user = new UserRepository();
        try {
           const result = await user.updateUser( id, dataToUpdate, updator);
           res.send({
                data: result,
                message: 'User Updated',
                code: 200
            });
      } catch (err) {
            res.send({
                error: 'User Not Found for update',
                code: 404
            });
          }
        }

    public async delete(req: IRequest, res: Response, next: NextFunction) {
        const  id  = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        try { await user.deleteData(id, remover);

            res.send({
                message: 'Deleted successfully',
                code: 200
            });
        }
        catch (err)
            res.send({
                message: 'User not found to be deleted',
                code: 404
            });

    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;

        const user = new UserRepository();

        await user.getUser({ email })
            .then((userData) => {
                if (userData === null) {
                    res.status(404).send({
                        err: 'User Not Found',
                        code: 404
                    });
                    return;
                }

                const { password } = userData;

                if (password !== req.body.password) {
                    res.status(401).send({
                        err: 'Invalid Password',
                        code: 401
                    });
                    return;
                }

                const token = jwt.sign(userData.toJSON(), config.key);
                res.send({
                    message: 'Login Successfull',
                    status: 200,
                    'token': token
                });
                return;

            });
    }

}

export default new UserController();
