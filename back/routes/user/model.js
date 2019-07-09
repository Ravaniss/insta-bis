"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = require("mongoose");
const Hash_1 = require("../../scripts/Hash");
const user = new mongoose.Schema({
    forename: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    account_created: {
        type: String,
        default: Date.now()
    }
});
user.pre('save', function (next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let user = this;
        if (!user.isModified('password'))
            return next();
        user.password = yield Hash_1.Password.hash(user.password);
    });
});
user.methods.comparePassword = (hash, password) => {
    return Hash_1.Password.compare(hash, password);
};
const model = mongoose.model('user', user);
module.exports = model;
