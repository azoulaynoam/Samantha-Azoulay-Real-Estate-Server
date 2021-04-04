'use strict'
var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

/**
 * Represents a loggin session for the admin panel
 */
var SessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    expireAt: {
        type: Date,
        index: { expires: '7d' }
    }
})

SessionSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Sessions', SessionSchema)