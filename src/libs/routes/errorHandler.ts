import { Request, Response, NextFunction } from 'express';

export default(err, req: Request, res: Response, next: NextFunction) => {
//  console.log(err);
  res.status(err.code).json({
    error: err.error,
    status: err.code,
    message: err.message,
    timestamp: new Date()
  });
};
