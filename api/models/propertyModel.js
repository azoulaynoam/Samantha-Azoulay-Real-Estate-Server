'use strict'
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

/**
 * Represents a property
 * @constructor
 * @param {String} action - Sell or Rent
 * @param {Boolean} status - Is it still avaliable or not
 * @param {String} free_text - Apartment description
 * @param {Number} rooms - Number of rooms
 * @param {Number} bedrooms - Number of bedrooms
 * @param {Number} bathrooms - Number of bathrooms
 * @param {Number} size - Size of the apartment in Square Meters
 * @param {Number} price - Price of the apartment
 * @param {String} video - path to video
 * @param {[String]} images - An array of images
 */

var PropertySchema = new mongoose.Schema({
    action: {
        type: String,
        enum: ['sell', 'rent'],
        required: "Selling or Renting"
    },
    status: {
        type: Boolean, 
        required: "Status of the post"
    },
    free_text: {
        type: String,
        required: "Describe the apartment"
    },
    rooms: {
        type: Number,
        required: "Number of rooms."
    },
    bedrooms: {
        type: Number,
        required: "Number of bedrooms."
    },
    bathrooms: {
        type: Number,
        required: "Number of bathrooms."
    },
    size: {
        type: Number,
        required: "Size of the apartment (Square Meters)"
    },
    price: {
        type: Number,
        required: "Price tag"
    },
    video: {
        type: String,
        required: false
    },
    images: {
        type: [String],
        required: false
    }
});

PropertySchema.plugin(autoIncrement.plugin, 'Properties');

module.exports = mongoose.model('Properties', PropertySchema)