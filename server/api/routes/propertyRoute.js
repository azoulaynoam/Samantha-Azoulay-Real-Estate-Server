'use strict'

module.exports = function(app) {
    var admin = require('../controllers/adminController')
    var property = require('../controllers/propertyController');

    app.route('/login')
        .post(admin.login)

    app.route('/register')
        .post(admin.register)

    app.route('/properties')
        .get(property.list_properties)
        .post(property.create_property);

    app.route('/properties/:propertyId')
        .get(property.read_property)
        .patch(property.update_property)
        .delete(property.delete_property);
};