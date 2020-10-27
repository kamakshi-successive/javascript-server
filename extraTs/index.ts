// console.log("hi");
<<<<<<< HEAD
import { diamond, equilateral } from './patterns';
diamond(6);
// console.log('from now equilateral print');
equilateral(6);
=======
import { diamond,equilateral } from './patterns';
diamond(6)
console.log("Equilateral Progra#############@@@@@@@@@@@@@@");
equilateral(6)
>>>>>>> eec50f962244033eec552b69b79ef65e47377a05

import { hasPermission, validateUsers } from './utils';

import { permissions , user } from './constants';
const result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(user);
