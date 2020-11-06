import { Request, Response, NextFunction } from 'express';

export default function(config) {
  return function (req: Request, res: Response, next: NextFunction) {
  console.log('Config ', config);
  console.log(req.query);
  console.log(req.body);

  next();

  };
  }

