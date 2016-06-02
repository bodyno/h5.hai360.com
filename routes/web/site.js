module.exports = function (app) {

  app.get('/', function (req, res) {
    res.redirect("/help")
  });

  app.get('/notice', function (req, res) {
    res.render("notice/notice")
  });

};
