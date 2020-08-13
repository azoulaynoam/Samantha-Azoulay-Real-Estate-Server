'use strict'
var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var ttl = require('mongoose-ttl')

var UserModel = mongoose.Schema({
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
        type: [{
            type: Number,
            enum: [0, 1, 2]
        }]
    }
})

var TokenModel = mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    token: {
        type: String,
        require: true,
        unique: true
    },
    ip_address: {
        type: String,
        require: true
    }
})

UserModel.plugin(uniqueValidator.plugin, 'User')
TokenModel.plugin(uniqueValidator.plugin, 'Token')
TokenModel.plugin(ttl, {ttl: '7d', reap: true})
var User = mongoose.model('User', UserModel)
var Token = mongoose.model('Token', TokenModel)

module.exports = {
    User: User,
    Token: Token
}