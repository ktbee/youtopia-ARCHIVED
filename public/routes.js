module.exports = function(app) {
  var youtopia = require('./controller');

  // Routes
  app.route('/')
    .get(youtopia.index);

  app.route('/get/index')
    .get(youtopia.getIndex);

  app.route('/newest')
    .get(youtopia.newest);

  app.route('/get/newest')
    .get(youtopia.getNewest);
}
