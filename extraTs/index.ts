// console.log("hi");
import { diamond, equilateral } from './patterns';
diamond(6);
// console.log('from now equilateral print');
equilateral(6);

import { hasPermission, validateUsers } from './utils';

import { permissions , user } from './constants';
const result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(user);
