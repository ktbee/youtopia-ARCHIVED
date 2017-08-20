var config = require('./../config.js');
var http = require('http');
var https = require('https');
var ytRootUrl = 'https://www.googleapis.com/youtube/v3/search?';

exports.index = function(req, res) {
  var vidRequest;
  var body = '';
  var vidIds = [];
  var searchParams = 'part=id&type=video&maxResults=4&q=aol'
  var ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;

  https.get(ytAPIUrl, (response) => {
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
