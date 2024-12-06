
class SiteController {
    //[GET] /
    home(req, res) {
        res.render('home') //render ở file views/news.hbs
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}


module.exports = new SiteController