const newsRouter = require('./news')
const courseRouter = require('./courses')
const siteRouter = require('./site')
const route = (app) => {

    app.use('/news', newsRouter)
    app.use('/course', courseRouter)
    app.use('/', siteRouter)
}

module.exports = route