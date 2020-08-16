'use strict';

var mongoose = require('mongoose')
var Property = require('../models/propertyModel')
Property = mongoose.model('Properties')
var Session = mongoose.model('Sessions')

/**
 * Todo:
 *      - Add a token auth before the needed functions.
 */
exports.create_property = function(req, res) {
    var token = req.cookies.access_token
    Session.findOne({token: token}, (err, session) => {
        if(err){
            res.status(401).send('Not Authorized.')
        } else {
            var new_property = new Property(req.body);
            new_property.save(function(err, property) {
                if(err)
                    res.send(err);
                res.json(property);
            });
        }
    })
};

/**
 * Todo:
 *      - Add an admin authentication
 */
exports.read_property = function(req, res) {
    Property.findById(req.params.propertyId, function(err, property){
        if(err)
            res.send(err);
        res.json(property);
    });
};

/**
 * Todo:
 *      - Add an admin authentication
 */
exports.update_property = function(req, res) {
    Property.findByIdAndUpdate({_id: req.params.propertyId}, req.body, {new: true}, function(err, task){
        if(err)
            res.send(err)
        res.json(task);
    });
};

/**
 * Todo:
 *      - Add an admin authentication
 */
exports.delete_property = function(req, res) {
    Property.findByIdAndDelete(req.params.propertyId, function(err, property){
        if(err)
            res.send(err);
        res.json(property);
    });
};

/**
 * Todo:
 *      - Add a filter for aparment searching
 */
exports.list_properties = function(req, res) {
    Property.find({req}, function(err, properties) {
        if(err)
            res.send(err);
        res.status(200).json(properties)
    });
};