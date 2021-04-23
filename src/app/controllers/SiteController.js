const Course = require('../models/Course')
const { multipleMongoosesToObject } = require('../../util/mongoose')
class SiteController {
    home(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongoosesToObject(courses)
                })
            })
            .catch(next)
            //res.render('home')
    }
    search(req, res) {
        res.send('<h5>Lalala</h5>')
    }
}

module.exports = new SiteController