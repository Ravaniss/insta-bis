"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
exports.router = router;
const controller = require('./controller');
router.post('/login', controller.login);
router.post('/register', controller.register);
