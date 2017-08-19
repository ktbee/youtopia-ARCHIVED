var config = require('./../../config.js');
var http = require('http');
var https = require('https');
var ytUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=' + config.youtubeAPIKey;

exports.index = function(req, res) {
  var vidRequest;
  var body = '';
  var vidIds = [];

  https.get(ytUrl, (response) => {
    var body = '';
    var vidIds = [];

    response.on('error', function(err) {
      console.log(err);
    });

    response.on('data', function (data) {
      body += data;
    });
    response.on('end', function(){
      var parsedResults = JSON.parse(body);
      vidResults = parsedResults.items;

      vidResults.forEach( function( element ){
        vidIds.push(element.id.videoId);
      });

      res.render('vids', {
         vidIds : vidIds
     });
    });
  });
}
