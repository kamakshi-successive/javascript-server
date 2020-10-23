"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(Email) {
    const RegExp = "^[a-zA-Z0-9+_.-]+@successive.tech+$";
    let str = Boolean(Email.match(RegExp));
    return str;
}
exports.default = validateEmail;
//# sourceMappingURL=helper.js.map