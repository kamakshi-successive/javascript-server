// console.log("hi");
import { diamond,equilateral } from './patterns';
diamond(6)
equilateral(6)

import {createDimondShape,triangle} from './patterns';
import {hasPermission,validateUsers} from './utils';



import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(user);
