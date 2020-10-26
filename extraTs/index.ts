// console.log("hi");
import { diamond,equilateral } from './patterns';
diamond(6)
console.log("Equilateral Progra#############@@@@@@@@@@@@@@");
equilateral(6)

import {hasPermission,validateUsers} from './utils';

import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(user);
