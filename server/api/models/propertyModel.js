'use strict';
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var PropertySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
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

PropertySchema.plugin(autoIncrement.plugin, 'Property');
var Property = mongoose.model('Property', PropertySchema);

module.exports = {
    Property: Property
}