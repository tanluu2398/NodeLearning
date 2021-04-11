class SiteController {
    home(req, res) {
        res.render('home')
    }
    search(req, res) {
        res.send('<h5>Lalala</h5>')
    }
}

module.exports = new SiteController