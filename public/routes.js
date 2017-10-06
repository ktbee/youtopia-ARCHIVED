module.exports = function(app) {
  var youtopia = require('./controller');

  // Routes
  app.route('/')
    .get(youtopia.index);

  app.route('/get/index')
    .get(youtopia.getIndex);

  app.route('/best')
    .get(youtopia.best);

  app.route('/get/best')
    .get(youtopia.getBest);

  app.route('/live')
    .get(youtopia.live);

  app.route('/get/live')
    .get(youtopia.getLive);

  app.route('/:searchTerm')
    .get(youtopia.search);

  app.route('/get/search/:searchTerm')
    .get(youtopia.getSearch);
}
