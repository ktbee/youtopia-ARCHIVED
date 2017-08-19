module.exports = function(app) {
  var youtopia = require('../controllers/controller');

  // Routes
  app.route('/')
    .get(youtopia.index);
}
