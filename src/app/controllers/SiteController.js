const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const { reset } = require('nodemon');
const CourseController = require('./CourseController');

class SiteController {
    //[GET], index
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    };

    //[GET], search
    search(req, res, next){
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController;