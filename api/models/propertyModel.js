'use strict';
var mongoose = require('mongoose');

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
    number_of_rooms: {
        type: String,
        required: "Number of rooms"
    },
    size: {
        type: String,
        required: "Size of the apartment (Square Meters)"
    },
    price: {
        type: Number,
        required: "Price tag"
    }
});


var Property = mongoose.model('Property', PropertySchema);

module.exports = {
    Property: Property
}