module.exports = function(app) {
  var youtopia = require('./controller');

  // Routes
  app.route('/')
    .get(youtopia.index);
}
