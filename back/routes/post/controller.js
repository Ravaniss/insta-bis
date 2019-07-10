"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jwt = tslib_1.__importStar(require("jsonwebtoken"));
const model = require('./model');
const userModel = require('../user/model');
module.exports = {
    newpost: (req, res) => {
        // @ts-ignore
        let userId = jwt.decode(req.body.auth_token).id;
        userModel.findById(userId)
            .then((result) => {
            if (!result) {
                return res.send({ success: false, msg: 'No user was found' });
            }
            let newPost = new model({
                userId,
                display_name: result.forename + ' ' + result.surname,
                image: req.body.image,
                desc: req.body.desc
            });
            newPost.save()
                .then((result) => {
                res.send({ success: true, result });
            })
                .catch((err) => {
                res.send({ success: false, err });
            });
        });
    }
};
