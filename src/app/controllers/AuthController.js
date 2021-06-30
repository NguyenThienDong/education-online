const User = require('../models/User');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');

class AuthController {
    login(req, res, next) {
        res.render('auth/login');
    }
}

module.exports = new AuthController;