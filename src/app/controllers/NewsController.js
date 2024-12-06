
class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news') //render ở file views/news.hbs
    }

    // [GET] /news/:slug
    show(req, res) {
        res.render('home')
    }
}


module.exports = new NewsController