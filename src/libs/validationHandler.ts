<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';
const validationHandler = function (config) {
  return function (req: Request, res: Response, next: NextFunction) {
    const arrayName = [];
    const Keys = Object.keys(config);
    Keys.forEach(element => {
      const objectkeys = config[element];
      const ekeys = (Object.keys(objectkeys));
      const values = (objectkeys['in'].map(inside => req[inside][element]))
        .filter(ele => ele);
      const inValue = (objectkeys['in']);
      const data = req[inValue];
      let value = values.length ? values[0] : undefined;
      if (ekeys.includes('required')) {
        if (objectkeys.required && !value) {
          next({
            error: `${element} is required`,
            message: `${element} is required `,
            status: '422'
          });
        } else {
          if (objectkeys.string) {
            if ((objectkeys.string) && typeof value !== 'string') {
              arrayName.push(objectkeys.errorMessage || `${element} should be of type string`);
            }
          }
          if (objectkeys.regex) {
            const reg = new RegExp(objectkeys.regex);
            if (!reg.test(value)) {
              arrayName.push(objectkeys.errorMessage || `${element} is invalid`);
            }
          }
          if (objectkeys.number) {
            if ((objectkeys.number) && isNaN(value) && value) {
              arrayName.push(objectkeys.errorMessage || `${element} should be of type number`);
            }
          }
          if (objectkeys.default) {
            if (value === '' || value === undefined) {
              value = objectkeys.default;
            }
          }
          if (objectkeys.custom) {
            objectkeys.custom(value)
          }
          if (objectkeys.isObject) {
            if ((objectkeys.isObject) && typeof value !=='object') {
              arrayName.push(objectkeys.errorMessage || `${element} should be of object type`)
            }
          }
        }
      }
    });
    if (arrayName.length) {
      next(arrayName);
    }
    else {
      next();
    }
  }
}
export default validationHandler;
=======
import { NextFunction, Request, Response } from 'express';


export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    console.log(req.body);
    console.log(req.query);
    console.log(Object.keys(req.query).length);
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const obj = config[key];
        console.log('key is', key);
        const values = obj.in.map((val) => {
            return req[val][key];
        });

        // Checking for required
        console.log('values is', values);
        if (obj.required) {
            if (isNull(values[0])) {
                errors.push({
                    key: key,
                    location: obj.in,
                    message: obj.errorMessage || `${key} is required`,
                });
                return;
            }
        }
        if (!obj.required) {
            if (isNull(values[0])) {
                return;
            }
        }

        // Checking for In i.e Body or Query
        if (Object.keys(req[obj.in]).length === 0) {
            errors.push({
                key: key,
                location: obj.in,
                message: obj.errorMessage || `Values should be passed through ${obj.in}`,
            });
        }
        // Checking for string
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                errors.push({
                    key: key,
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be a String`,
                });
            }
        }
        // Checking for object
        if (obj.isObject) {
            if (!(typeof (values) === 'object')) {
                errors.push({
                    key: key,
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be an object`,
                });
            }
        }
        // Checking for regex
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(values[0])) {
                errors.push({
                    key: key,
                    location: obj.in,
                    message: obj.errorMessage || `${key} is not valid expression`,
                });
            }
        }
        // Checking for default
        if (obj.default) {
            if (isNull(values[0])) {
                values[0] === obj.default;
            }
        }
        // Checking for number
        if (obj.number) {
            if (isNaN(values[0]) || values[0] === undefined) {
                errors.push({
                    key: key,
                    location: obj.in,
                    message: obj.errorMessage || `${key}  must be an number`,
                });
            }
        }
    });
    if (errors.length > 0) {
        res.status(400).send({ errors });
    }
    else {
        next();
    }
};



function isNull(obj) {
    const a = (obj === undefined || obj === null);
    return a;
}
>>>>>>> 59a919a441b6cbb9095aab71c01b274f6a099b03
