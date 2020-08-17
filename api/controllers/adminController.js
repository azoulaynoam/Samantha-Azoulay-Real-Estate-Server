'use strict'

var server = require('../../server')
var crypto = require('crypto')
var bcrypt = require('bcryptjs')
var User = server.connection.model('Users')
var Session = server.connection.model('Sessions')

/**
 * A Function that generates tokens
 */
var token_generator = function() {
    return crypto.randomBytes(8).toString('hex') + '-' + crypto.randomBytes(8).toString('hex') + '-' + crypto.randomBytes(8).toString('hex')
}

/**
 * A session registeration function
 */
var create_session = function(user){
    var session = new Session({
        used_id: user.user_id,
        token: token_generator(),
        ip_address: 'test'
    })
    var generateToken = function(err, token_session){
        if(err){
            if (err.errors.token){
                console.log(err)
                session.token = token_generator()
                session.save(generateToken)
            } else {
                return(token_session.token)
            }
        }
    }
    session = new Session(session)
    return session.save(generateToken)
}

/**
 * Logging a user and storing a cookie with a token with experation of 1 week.
 */
exports.login = function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user){
        if (err){
            res.status(401).send('Error: Username Not Found.')
        } else {
            bcrypt.compare(req.body.password, user.password).then(() => {
                var token = create_session(user)
                var maxAge = 7 * 24 * 60 * 60 * 1000 // Thats a 1 week in miliseconds
                res.status(200).cookie('access_token', token, {maxAge: maxAge ,httpOnly: true}).send('Logged in succesfully.');
            }).catch(() => {
                res.status(401).send('Error: Wrong Password.')
            })
        }
    })
}

/**
 * Registeration
 */
exports.register = function(req, res) {
    bcrypt.hash(req.body.password, 10, function(err, password_hash) {
        if (err) {
            res.status(401).json(err)
        } else {
            var new_user = new User({
                username: req.body.username,
                password: password_hash
            })
            new_user.save(function(err, user){
                if (err){
                    res.status(401).json(err.errors)
                } else {
                    var token = create_session(user)
                    print(token)
                    res.status(200).cookie('access_token', token, {maxAge: maxAge ,httpOnly: true}).send('Registered succesfully.');
                }
            })
        }
    })
}