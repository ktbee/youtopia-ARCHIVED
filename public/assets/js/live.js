$(document).ready(function(){
  var $vidEmbed = $('iframe');
  var vidEmbedSrc = "https://www.youtube.com/embed/";
  var embedConfig = '?autoplay=1&controls=0&showinfo=1';

  // Get newest vid ID and add it to the embed code
  $.get( "/get/live", function( data ) {
    var vidId = data.vidIds[0];
    $vidEmbed.attr('src', vidEmbedSrc + vidId + embedConfig);
  });
});
