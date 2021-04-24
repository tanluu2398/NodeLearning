const Course = require('../models/Course')
const { multipleMongoosesToObject } = require('../../util/mongoose')
class CourseController {
    show(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongoosesToObject(courses)
                })
            })
            .catch(next)
    }
}
module.exports = new CourseController