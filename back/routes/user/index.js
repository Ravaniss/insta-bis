"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRouter = require('express').Router();
exports.userRouter = userRouter;
const controller = require('./controller');
userRouter.post('/login', controller.login);
userRouter.post('/register', controller.register);
userRouter.post('/getprofile', controller.getProfile);
