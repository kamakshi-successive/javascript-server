import * as jwt from 'jsonwebtoken';
import { hasPermission }  from '../../libs/permissions';
import IRequest from '../../IRequest';
import { Response , NextFunction } from 'express';
import configuration from '../../config/configuration';
export default  (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
      const token = req.headers.authorization;
    //   console.log('token' , token)
      const decodedUser = jwt.verify(token, configuration.key);
    //   console.log('decoded user', decodedUser)
    //   console.log('module name', moduleName)
    //   console.log('decoded user role ', decodedUser.role)
    //   console.log('permission type ', permissionType)
    req.userData = decodedUser;
      if (hasPermission(moduleName, decodedUser.role, permissionType)) {
          console.log('req userdata', req.userData)
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
              message: 'Unauthorised Acc',
              code: 403
          }
      );
  }
};

