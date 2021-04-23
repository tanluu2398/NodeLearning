const express = require('express')
const router = express.Router()
const CourseController = require('../app/controllers/CourseController');

router.get('courses/:slug', CourseController.show)
router.get('courses/', CourseController.index)


module.exports = router