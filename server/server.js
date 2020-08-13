var express = require('express'),
    app = express(),
    port = 4000;
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;
var connection = mongoose.createConnection('mongodb://samantha:azoulay101@ds151259.mlab.com:51259/heroku_0q7tlsvr');
autoIncrement.initialize(connection);
module.exports.connection = connection

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/propertyRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Samantha Azoulay Real Estate API Started at port: ' + port);