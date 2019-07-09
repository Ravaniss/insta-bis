"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
const model = require('./model');
module.exports = {
    login: (req, res) => {
        model.findOne({ email: req.body.email }, (err, user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (err)
                throw err;
            const isMatch = yield user.comparePassword(user.password, req.body.password);
            if (!isMatch) {
                res.status(500).send({ msg: 'Email or Password did not match' });
                return false;
            }
            let token = jwt.sign({ id: user._id }, config_1.secret, { expiresIn: 86400 });
            res.status(200).send({ msg: 'Login Successful', token });
        }));
    },
    register: (req, res) => {
        let newUser = new model({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
        });
        newUser.save()
            .then((result) => {
            console.log(result);
            res.status(200).send({ msg: 'Register Successful', user_id: result._id });
        })
            .catch((e) => {
            console.log(e);
            res.status(500).send({ msg: 'Register Unsuccessful' });
        });
    }
};
