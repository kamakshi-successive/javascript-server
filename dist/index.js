"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("hi");
const patterns_1 = require("./patterns");
patterns_1.diamond(6);
patterns_1.equilateral(6);
const utils_1 = require("./utils");
const constants_1 = require("./constants");
let result = utils_1.hasPermission(constants_1.permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);
utils_1.validateUsers(constants_1.user);
//# sourceMappingURL=index.js.map