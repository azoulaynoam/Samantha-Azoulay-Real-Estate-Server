'use strict'

module.exports = function(app) {
    var property = require('../controllers/propertyController');

    app.route('/properties')
        .get(property.list_properties)
        .post(property.create_property);

    app.route('/properties/:propertyId')
        .get(property.read_property)
        .patch(property.update_property)
        .delete(property.delete_property);
};