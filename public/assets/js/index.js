$(document).ready(function(){
  var $vidEmbeds = $('iframe');
  var embedConfig = '?autoplay=1&controls=0&showinfo=1';
  var vidEmbedSrc = "https://www.youtube.com/embed/";

  // Get newest vid ID and add it to the embed code
  $.get( "/get/index" ).then((data) => {
    var vidIds = data.vidIds;
    var searchTerm = data.searchTerm;

    console.log('searchTerm: ', searchTerm[0]);
    $.each( $vidEmbeds, ( index, embed ) => {
      var vidEmbedSrc = $(embed).attr('src');
      $(embed).attr('src', vidEmbedSrc + vidIds[index] + embedConfig);
    });

  });
});
