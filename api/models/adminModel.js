'use strict'
var mongoose = require('mongoose');
var ttl = require('mongoose-ttl');
var uniqueValidator = require('mongoose-unique-validator');

/**
 * Represents a user for the admin panel
 */
var UserSchema = mongoose.Schema({
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

/**
 * Represents a loggin session for the admin panel
 */
var SessionSchema = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    token: {
        type: String,
        require: true,
        unique: true
    },
    login_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    ip_address: {
        type: String,
        require: true
    }
})

UserSchema.plugin(uniqueValidator);
SessionSchema.plugin(uniqueValidator);
SessionSchema.plugin(ttl, { ttl: '7d', reap: true });

module.exports = {
    UserSchema: mongoose.model('Users', UserSchema),
    SessionSchema: mongoose.model('Sessions', SessionSchema)
}