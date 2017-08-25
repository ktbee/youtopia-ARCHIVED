var config = require('./../config.js');
var http = require('http');
var https = require('https');
var ytRootUrl = 'https://www.googleapis.com/youtube/v3/search?';
var body, ytAPIUrl, searchParams;
var vidIds = [];

exports.index = function(req, res) {
  searchParams = 'part=id&type=video&maxResults=4&q=aol';
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  vidIds = queryYoutube(ytAPIUrl, res).then((vidIds) => {
    res.render('index', {
      vidIds : vidIds
    });
  });
}

exports.newest = function(req, res) {
  res.render('newest');
}

exports.getNewest = function(req, res) {
  searchParams = 'part=id&maxResults=1&order=date&type=video';
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  res.send(queryYoutube(ytAPIUrl, res));
}

function queryYoutube(ytAPIUrl, res) {
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

      return vidIds;
    });
  });
}
