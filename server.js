var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var Property = require('./api/models/propertyModel').Property;
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://samantha:VCfk6!7$HLgH3ju@ds247499.mlab.com:47499/heroku_vmf897wr");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/propertyRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Samantha Azoulay Real Estate API Started at port: ' + port);