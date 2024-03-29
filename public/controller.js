var config = require('./../config.js');
var http = require('http');
var https = require('https');
var randomWords = require('random-words');
var bestTerms = require('./../public/bestTerms.js');
var ytRootUrl = 'https://www.googleapis.com/youtube/v3/search?';
var body, ytAPIUrl, searchParams;
var vidIds = [];

exports.index = function( req, res ) {
  res.render('four', { script: 'index' });
}

exports.getIndex = function( req, res ) {
  searchTerm = randomWords(1);
  searchParams = 'part=id&type=video&maxResults=4&q=' + searchTerm;
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  vidIds = queryYoutube( ytAPIUrl ).then(( vidIds ) => {
    res.send({
      vidIds : vidIds,
      searchTerm : searchTerm
    });
  });
}

exports.best = function( req, res ) {
  res.render('four', { script: 'best' });
}

exports.getBest = function( req, res ) {
  searchTerm = bestTerms.getBestTerm();
  searchParams = 'part=id&type=video&maxResults=4&q=' + searchTerm;
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  vidIds = queryYoutube( ytAPIUrl ).then(( vidIds ) => {
    res.send({
      vidIds : vidIds,
      searchTerm : searchTerm
    });
  });
}

exports.live = function( req, res ) {
  res.render('one', { script: 'live' });
}

exports.getLive = function( req, res ) {
  searchParams = 'part=id&maxResults=1&order=date&type=video';
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  queryYoutube(ytAPIUrl).then(function(vidIds) {
    res.send({vidIds: vidIds});
  });
}

exports.search = function( req, res ) {
  res.render('four', { script: 'search' });
}

exports.getSearch = function( req, res ) {
  searchTerm = req.params.searchTerm;
  searchParams = 'part=id&type=video&maxResults=4&q=' + searchTerm;
  ytAPIUrl = ytRootUrl + searchParams + '&key=' + config.youtubeAPIKey;
  vidIds = queryYoutube( ytAPIUrl ).then(( vidIds ) => {
    res.send({
      vidIds : vidIds,
      searchTerm : searchTerm
    });
  });
}

function queryYoutube( ytAPIUrl ) {
  return new Promise(( resolve, reject ) => {
    https.get(ytAPIUrl, ( response ) => {
      var body = '';
      var vidIds = [];

      response.on('error', function( err ) {
        reject(err);
      });

      response.on('data', function ( data ) {
        body += data;
      });
      response.on('end', function(){
        var parsedResults = JSON.parse(body);
        vidResults = parsedResults.items;

        vidResults.forEach( function( element ){
          vidIds.push(element.id.videoId);
        });

        resolve(vidIds);
      });
    });
  });
}
