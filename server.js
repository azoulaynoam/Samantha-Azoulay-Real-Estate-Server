const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const autoIncrement = require('mongoose-auto-increment')

mongoose.Promise = global.Promise;
var connection = mongoose.createConnection('mongodb://samantha:samantha101@ds029969.mlab.com:29969/heroku_f8hmz2cg', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
autoIncrement.initialize(connection);

module.exports.connection = connection;

var Property = require('./api/models/propertyModel')
var {User, Session} = require('./api/models/adminModel')
var routes = require('./api/routes/propertyRoute') //importing route with all methods

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

routes(app) //register the route

app.listen(port)


console.log('Azoulay Real-Estate API Started at port: ' + port)