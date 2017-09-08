module.exports = function(app) {
  var youtopia = require('./controller');

  // Routes
  app.route('/')
    .get(youtopia.index);

  app.route('/get/index')
    .get(youtopia.getIndex);

  app.route('/live')
    .get(youtopia.live);

  app.route('/get/live')
    .get(youtopia.getLive);
}
