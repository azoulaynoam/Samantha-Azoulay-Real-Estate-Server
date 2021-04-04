'use strict'

var server = require('../../server')
var bcrypt = require('bcryptjs')
var create_session = require('../controllers/sessionController').create_session
var delete_session = require('../controllers/sessionController').delete_session
var User = server.connection.model('Users')


/**
 * Logging a user and storing a cookie with a token with experation of 1 week.
 */
exports.login = function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user){
        if (err | user === null){
            res.status(401).send('Error: Username Not Found.')
        } else {
            bcrypt.compare(req.body.password, user.password, function(err, truePass) {
                if (truePass) {
                    var ip
                    try{
                        ip = req.connection.remoteAddress.split(':')[3]
                    } catch {
                        ip = '0.0.0.0'
                    }
                    var token = create_session(user, ip)
                    var maxAge = 7 * 24 * 60 * 60 * 1000 // Thats a 1 week in miliseconds
                res.status(200).cookie('access_token', token, {maxAge: maxAge,httpOnly: true, secure: true}).send('Logged in succesfully.')
                } else {
                    res.status(401).send('Error: Wrong Password.')
                }
            })
        }
    })
}

/**
 * Logging a user out.
 */
exports.log_out = function(req, res){
    delete_session(req, res)
}

/**
 * Registeration
 */
exports.register = function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, password_hash) {
        if (err) {
            res.status(401).send('Error: Please enter password.')
        } else {
            var new_user = new User({
                username: req.body.username,
                password: password_hash
            })
            new_user.save(function(err, user){
                if (err){
                    res.status(401).json(err.errors)
                } else {
                    var token = create_session(user, req.connection.remoteAddress.split(':')[3])
                    var maxAge = 7 * 24 * 60 * 60 * 1000 // Thats a 1 week in miliseconds
                    res.status(200).cookie('access_token', token, {maxAge: maxAge,httpOnly: true, secure: true}).send('Registered succesfully.');
                }
            })
        }
    })
}