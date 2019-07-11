"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const config_1 = require("../../config");
const model = require('./model');
const postModel = require('../post/model');
module.exports = {
    login: (req, res) => {
        model.findOne({ email: req.body.email }, (err, user) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (err)
                return res.status(500).send({ auth: false, msg: err });
            if (!user)
                return res.send({ auth: false, msg: 'Email or Password did not match' });
            const isMatch = yield user.comparePassword(user.password, req.body.password);
            if (!isMatch)
                return res.send({ auth: false, msg: 'Email or Password did not match' });
            const token = jwt.sign({ id: user._id }, config_1.secret, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token });
        }));
    },
    register: (req, res) => {
        const newUser = new model({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
        });
        newUser.save()
            .then((result) => {
            const token = jwt.sign({ id: result._id }, config_1.secret, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token });
        })
            .catch((e) => {
            if (e.code === 11000)
                return res.send({ auth: false, msg: 'Email already exists...' });
            res.send({ auth: false, msg: 'An internal server error has occurred' });
        });
    },
    getProfile: (req, res) => {
        // @ts-ignore
        const userId = jwt.decode(req.body.auth_token).id;
        model.findById(userId)
            .then((user) => {
            if (!user)
                res.send({ success: false, msg: 'User not found' });
            postModel.find({ user_id: userId })
                .then((posts) => {
                res.send({
                    success: true,
                    details: {
                        display_name: user.forename + ' ' + user.surname,
                        posts
                    }
                });
            });
        });
    }
};
