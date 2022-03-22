const mongoose = require("mongoose");
const validator = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }

    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true, //remove white space
        minlength: [4, 'password must be 7 character']
    },
    phone: {
        type: Number,
        required: true,
        trim: true,


    },
});

module.exports = new mongoose.model("User", userSchema);