import * as jwt from 'jsonwebtoken';
import { hasPermission }  from '../../../extraTs/utils';
import IRequest from '../../IRequest';
import { NextFunction } from 'connect';
console.log('Json Web tokens', jwt);

export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
  console.log('The Config is', module, permissionType);

  console.log('Header is', req.headers.authorization);
try {
  const tokens = req.headers.authorization;
  const decodedUser = jwt.verify(tokens, 'qwertyuiopasdfghjklzxcvbnm123456');
  console.log('User: ', decodedUser);
  console.log('role', decodedUser.role);
  if (hasPermission(module, decodedUser.role, permissionType))
  next();
  else {
    next({
      error: 403,
      message: 'Unauthorized'
    });
  }

}
catch (err) {
 next({
   error: 'Unauthorization',
   code: 403
 });
}

};
