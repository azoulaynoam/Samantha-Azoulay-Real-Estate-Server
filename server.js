var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;
var cors = require('cors');
var mongoose = require('mongoose');
var Property = require('./api/models/propertyModel').Property;
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://samantha:azoulay101@ds151259.mlab.com:51259/heroku_0q7tlsvr");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/propertyRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Samantha Azoulay Real Estate API Started at port: ' + port);