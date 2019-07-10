"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postRouter = require('express').Router();
exports.postRouter = postRouter;
const controller = require('./controller');
postRouter.post('/newpost', controller.newpost);
