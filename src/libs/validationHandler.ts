import { NextFunction, Request, Response } from 'express';


const checkValidation = (errors, obj, values, key) => {
    if (obj.number) {
        const isNumber = Object.keys(values).some(valKey => {
            return Number.isInteger(parseInt(values[valKey], 10));
        });
        if (!isNumber) {
            errors.push({
                key,
                location: obj.in,
                message: obj.errorMessage || `${key} is invalid.`,
            });
        }
    }
};


export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    console.log('Body: ', req.body, 'Query: ', req.query, 'Params: ', req.params);
    const keys = Object.keys(config);  // {'skip','limit'}
    keys.forEach((key) => {
        const obj = config[key];     // {' skip: { } ','limit':{ } }
        const values =  { };
        let isValueAvail = false;
        obj.in.forEach((val) => {
          values[val] = req[val][key];
          if (req[val][key]) {
            isValueAvail = true;  // check for values
        }
        if (!obj.required && obj.default) {
          req[val][key] = req[val][key] || obj.default;
        console.log('req'  , req[val][key]); }
        });
        console.log('......values......', values);     //   {query={2},values={}}

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
           } );

    if (errors.length > 0) {
              res.status(400).send({ errors });
          }
          else {
              next();
          }
      };


    //     if (!obj.required) {
    //         if (isNull(values[0])) {
    //             return;
    //         }
    //     }

//         // Checking for In i.e Body or Query
//         if (Object.keys(req[obj.in]).length === 0) {
//             errors.push({
//                 key,
//                 location: obj.in,
//                 message: obj.errorMessage || `Values should be passed through ${obj.in}`,
//             });
//         }
//         // Checking for string
//         if (obj.string) {
//             if (!(typeof (values[0]) === 'string')) {
//
    //     errors.push({
//                     key,
//                     location: obj.in,
//                     message: obj.errorMessage || `${key} Should be a String`,
//                 });
//             }
//         }
//         // Checking for object
//         if (obj.isObject) {
//             if (!(typeof (values) === 'object')) {
//                 errors.push({
//                     key,
//                     location: obj.in,
//                     message: obj.errorMessage || `${key} Should be an object`,
//                 });
//             }
//         }
//         // Checking for regex
//         if (obj.regex) {
//             const regex = obj.regex;
//             if (!regex.test(values[0])) {
//                 errors.push({
//                     key,
//                     location: obj.in,
//                     message: obj.errorMessage || `${key} is not valid expression`,
//                 });
//             }
//         }
//         // Checking for default
//         if (obj.default) {
//             if (isNull(values[0])) {
//                 values[0] === obj.default;
//             }
//         }
//         // Checking for number
//         if (obj.number) {
//             if (isNaN(values[0]) || values[0] === undefined) {
//                 errors.push({
//                     key,
//                     location: obj.in,
//                     message: obj.errorMessage || `${key}  must be an number`,
//                 });
//             }
//         }
//     });
//



// function isNull(obj) {
//     const a = (obj === undefined || obj === null);
//     return a;
// }
