"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const config_1 = require("./config");
const user_1 = require("./routes/user");
const cors = require('cors');
mongoose.connect(config_1.mongo_uri, { useNewUrlParser: true })
    .then(() => {
    const app = express();
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.use(express.json({ limit: '50mb' }));
    app.use(cors());
    app.use('/user', user_1.router);
    app.listen(config_1.port, console.log(`Server has started on http://localhost:${config_1.port}`));
}).catch(err => console.error(`An error has occured ${err}`));
