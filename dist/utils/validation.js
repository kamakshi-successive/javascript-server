"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("./helper.js");
function validateUsers(user) {
    const validUsers = [];
    const invalidUsers = [];
    user.forEach(({ traineeEmail, reviewerEmail }) => {
        helper_js_1.default(traineeEmail) ? validUsers.push(traineeEmail) : invalidUsers.push(traineeEmail);
        helper_js_1.default(reviewerEmail) ? validUsers.push(reviewerEmail) : invalidUsers.push(reviewerEmail);
    });
    console.log(`There are ${validUsers.length} valid users:`, validUsers);
    console.log(`There are ${invalidUsers.length} invalid users:`, invalidUsers);
}
exports.default = validateUsers;
//validateUsers(users)
//# sourceMappingURL=validation.js.map