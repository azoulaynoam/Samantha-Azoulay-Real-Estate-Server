'use strict'
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

/**
 * Represents a user for the admin panel
 */
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    permission: {
        type: Number,
        enum: [0, 1, 2],
        default: 0
    }
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Users', UserSchema)