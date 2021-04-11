class NewsController {
    index(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('<h5>Lalala</h5>')
    }
}

module.exports = new NewsController