import * as jwt from 'jsonwebtoken';
import { hasPermission }  from '../../libs/permissions';
import { permissions } from '../../libs/constants';
import IRequest from '../../IRequest';
import { Response , NextFunction } from 'express';
import configuration from '../../config/configuration';
export default  (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
      const token = req.headers.authorization;
      const decodedUser = jwt.verify(token, configuration.KEY);
      if (hasPermission(moduleName, decodedUser.role, permissionType)) {
          console.log(moduleName, decodedUser.role, permissionType);
          req.userData = decodedUser;
          next();
      } else {
          next(
              {
                  message: 'Unauthorised Access',
                  code: 403
              }
          );
      }
  } catch (err) {
      next(
          {
              message: 'Unauthorised Access',
              code: 403
          }
      );
  }
};
// export default (module: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {

//   try {
//   console.log('The Config is', module, permissionType);
//   const token = req.headers.authorization;
//   console.log( token );
//   const decodedUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
//   console.log('User: ', decodedUser);
//   console.log('role', decodedUser.role);
//   const userRepository = new UserRepository();
//   userRepository.findOne({_id: decodedUser._id})
//   .then((userData) => {
//     if (!userData) {
//       next({
//         error: 'Unauthorized access',
//         message: 'User not match',
//         status: 403,
//       });
//     }
//     else if (!hasPermission(permissions.getUser, decodedUser.role, permissionType)) {
//       res.status(400).send({
//         message: `${permissionType} Permission is not allowed.`, status : 400
//       });
//     }
//     else {
//       req.userData = userData;
//       next();
//     }
//    });
//  }
