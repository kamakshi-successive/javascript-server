import * as jwt from 'jsonwebtoken';
import { hasPermission }  from '../../libs/permissions';
import IRequest from '../../IRequest';
import { Response , NextFunction } from 'express';
import configuration from '../../config/configuration';
export default  (moduleName, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
  try {
      const token = req.headers.authorization;
      const decodedUser = jwt.verify(token, configuration.key);
      if (hasPermission(moduleName, decodedUser.role, permissionType)) {
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

