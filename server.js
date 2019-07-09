"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const config_1 = require("./config");
const user_1 = require("./routes/user");
mongoose.connect(config_1.mongo_uri, { useNewUrlParser: true })
    .then(() => {
    const app = express();
    const cors = (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    };
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors);
    app.use('/user', user_1.router);
    app.listen(config_1.port, console.log(`Server has started on http://localhost:${config_1.port}`));
}).catch(err => console.error(`An error has occured ${err}`));
