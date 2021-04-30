const Course = require('../models/Course')
const { mongoToObject } = require('../../util/mongoose')
class CourseController {
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', { course: mongoToObject(course)})                
            })
            .catch(next)
    }
    //[Get]
    create(req, res, next) {
        res.render('courses/create')
    }
    //[post]
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://image.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {
            
        })
        // res.json(req.body)
    }
}
module.exports = new CourseController