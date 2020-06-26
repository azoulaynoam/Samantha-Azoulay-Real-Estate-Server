'use strict';

var mongoose = require('mongoose');
var Property = mongoose.model('Property');

exports.create_property = function(req, res) {
    var new_property = new Property(req.body);
    new_property.save(function(err, property) {
        if(err)
            res.send(err);
        res.json(property);
    });
};

exports.read_property = function(req, res) {
    Property.findById(req.params.propertyId, function(err, property){
        if(err)
            res.send(err);
        res.json(property);
    });
};

exports.update_property = function(req, res) {
    Property.findByIdAndUpdate({_id: req.params.propertyId}, req.body, {new: true}, function(err, task){
        if(err)
            res.send(err)
        res.json(task);
    });
};

exports.delete_property = function(req, res) {
    Property.findByIdAndDelete(req.params.propertyId, function(err, property){
        if(err)
            res.send(err);
        res.json(property);
    });
};

exports.list_properties = function(req, res) {
    Property.find({}, function(err, properties) {
        if(err)
            res.send(err);
        res.json(properties);
        res.end(200);
    });
};