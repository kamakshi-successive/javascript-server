import { NextFunction, Request, Response } from 'express';

class UserController{
  get(req: Request,res: Response){
    console.log('Inside get request for User');
    const data=[
      {
        name: 'user1',
      },
      {
        name: 'user2',
      }
    ]
    res.status(200).send({message: 'Successful fetched user',data:data, })
  }
  create(req: Request,res: Response, next:NextFunction){
    console.log('Inside post request for User',req.body);

    const {name,id} =req.body;



  }
}
