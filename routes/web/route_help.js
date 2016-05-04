module.exports = function (app) {

  app.get('/help', function (req, res) {
    res.render('help/help');
  });

  app.get('/help/:path', function (req, res) {
    res.render('help/help_'+req.params.path);
  });

};
