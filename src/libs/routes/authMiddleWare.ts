import * as jwt from 'jsonwebtoken';
<<<<<<< HEAD
import { hasPermission }  from '../../../extraTs/utils';
import IRequest from '../../IRequest';
import { Request,Response,NextFunction } from 'express';
=======
import { hasPermission }  from '../../libs/permissions';
import { permissions } from '../../libs/constants';
>>>>>>> c67e7c8b9495424db9846ee7b9bad997034876fd
console.log('Json Web tokens', jwt);

export default (module, permissionType) => (req: IRequest, res: Response, next: NextFunction) => {
  console.log('The Config is', module, permissionType);

  console.log('Header is', req.headers.authorization);
try {
  const tokens = req.headers.authorization;
  const decodedUser = jwt.verify(tokens, 'qwertyuiopasdfghjklzxcvbnm123456');
  console.log('User: ', decodedUser);
  console.log('role', decodedUser.role);
<<<<<<< HEAD
  if (hasPermission(module, decodedUser.role, permissionType)) {
    req.userData=decodedUser;
    next();
  }

=======
  if (hasPermission(permissions.getUser, decodedUser.role, permissionType)) {
  console.log('true');
  }
>>>>>>> c67e7c8b9495424db9846ee7b9bad997034876fd
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
