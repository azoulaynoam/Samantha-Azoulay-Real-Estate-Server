'use strict'

module.exports = function(app){
    var admin = require('../controllers/adminController')

    app.route('/admin/login')
        .post(admin.login)
}