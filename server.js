var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./public/routes.js');
var handlebars = require('express-handlebars').create({
  layoutsDir: __dirname + "/views/layouts",
  partialsDir:  __dirname + "/views/partials",
  defaultLayout: 'layout',
  extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views',  __dirname + "/views");

routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.listen(port);

console.log('Server started on', port);
