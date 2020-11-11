import * as jwt from 'jsonwebtoken';
import { hasPermission }  from '../../libs/permissions';
import { permissions } from '../../libs/constants';
import IRequest from '../../IRequest';
import { Response , NextFunction } from 'express';
// console.log('Json Web tokens', jwt);

export default (module: any, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {

  try {
  console.log('The Config is', module, permissionType);
  const token = req.headers.authorization;
  console.log( token );
  const decodedUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
  console.log('User: ', decodedUser);
  console.log('role', decodedUser.role);
  if (hasPermission(permissions.getUser, decodedUser.role, permissionType)) {
    req.userData = decodedUser;
    console.log('true');
  }
  else {
    next({
      error: 403,
      message: 'Unauthorized'
    });
  }
  next();

}
catch (err) {
 next({
   error: 'Unauthorization',
   code: 403
 });
}

};
