const express = require('express'),
    app = express(),
    port = process.env.port || 80;
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const autoIncrement = require('mongoose-auto-increment')

mongoose.Promise = global.Promise;
var connection = mongoose.createConnection('mongodb://samantha:azoulay101@ds151259.mlab.com:51259/heroku_0q7tlsvr', {useNewUrlParser: true, useUnifiedTopology: true})
autoIncrement.initialize(connection);

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

var routes = require('./api/routes/propertyRoute') //importing route
routes(app) //register the route

app.listen(port)

console.log('Azoulay Real-Estate API Started at port: ' + port)