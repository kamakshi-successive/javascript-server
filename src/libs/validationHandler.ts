import { NextFunction, Request, Response } from 'express';
const checkValidation = ( errors, obj, values, key ) => {

  if (obj.number) {
    const isNumber = Object.keys(values).some(valKey => {
        return Number.isInteger(parseInt(values[valKey], 10));
    });
    if (!isNumber) {
        errors.push( {
            key,
            location: obj.in,
            message: obj.errorMessage || `${key} is invalid.`,
        } );
    }
}


// Checking for string
if (obj.string) {
  const isString = Object.keys(values).some(valKey => {
    return (typeof values[valKey] === 'string');
  });
  if (!isString) {
    errors.push({
          key,
          location: obj.in,
          message: obj.errorMessage || `${key} Should be a String`,
      });
  }
}

// Checking for regex
if (obj.regex) {
const regex = obj.regex;
console.log('Regex', regex);
console.log('Values regex:- ', values);
const isRegex = Object.keys(values).some(valKey => {
  return  (new RegExp(regex).test(values));
});
if (!isRegex)  {
    errors.push({
        key,
        location: obj.in,
        message: obj.errorMessage || `${key} is not valid expression`,
    });
}
}

//   Checking for object
if (obj.isObject) {
const obj1 = obj.isObject;
console.log('isobject', obj1);
const isObj = Object.keys(values).some(valkey => {
        return (typeof (values[valkey]) === 'object');
});

if (!isObj) {
    errors.push({
        key,
        location: obj.in,
        message: obj.errorMessage || `${key} Should be an object`,
    });
}
}
};
export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
   // console.log('Inside ValidationHandler Middleware');
   // console.log('Body: ', req.body, 'Query: ', req.query, 'Params: ', req.params);
    const keys = Object.keys(config);  // {'skip','limit'}
    keys.forEach((key) => {
        const obj = config[key];     // {' skip: { } ','limit':{ } }
        const values = {} ;
        let isValueAvail = false;
        obj.in.forEach((val) => {
          values[val] = req[val][key];
          if (req[val][key]) {
            isValueAvail = true;  // check for values
        }
        if (!obj.required && obj.default) {

          req[val][key] = req[val][key] || obj.default;
          values[val] = req[val][key];
         }
        });
       // console.log('......values......',  Object.values(values));     //   {query={2},values={}}

        if (obj.required) {
          if (!isValueAvail) {
              errors.push({
                    key,
                    location: obj.in,
                    message: `${key} is required`,
                });

            } else {
                      checkValidation(errors, obj, values, key);
            }
          }
          else {
            checkValidation(errors, obj, values, key);

          }
        }
    );

    if (errors.length > 0) {
              res.status(400).json({ errors });
          }
          else {
              next();
          }
      };
