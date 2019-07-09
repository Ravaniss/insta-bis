"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const argon2 = tslib_1.__importStar(require("argon2"));
class Password {
    static hash(password) {
        return argon2.hash(password);
    }
    static compare(hash, password) {
        return argon2.verify(hash, password);
    }
}
exports.Password = Password;
