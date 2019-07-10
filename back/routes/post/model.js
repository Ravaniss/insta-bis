"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// @ts-ignore
const ObjectId = Schema.ObjectId;
const post = new mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
});
const model = mongoose.model('post', post);
module.exports = model;
