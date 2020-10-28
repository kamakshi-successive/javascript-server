import { Request, Response, NextFunction } from 'express';
export default(req: Request, res: Response, next: NextFunction) => {
  next({
    error: 'Not Found',
    code: 404,
    message: 'error'
  });
};

  // console.log('Inside First Middleware');
  // res.send('Iam Good');
