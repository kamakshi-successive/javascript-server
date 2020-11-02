import { Request, Response, NextFunction } from 'express';

export default function(config) {
  return function (req: Request, res: Response, next: NextFunction) {
    const arrayName = [];
    const keys = Object.keys(config);
    keys.forEach(element => {
      const  objectkeys = config[element];
      const ekeys= (Object.keys(objectkeys));
      const values = (objectkeys['in'].map(inside => req[inside][element]))
    })
  console.log('Config ', config);
  console.log(req.query);
  console.log(req.body);

  next();

  };
  }

 const errors = [

    {

    key: 'skip',

    location: 'query',

    errorMessage: 'Skip is invalid'

    },

    {

    key: 'limit',

    location: 'query',

    errorMessage: 'Limit is invalid'

    }

    ];






