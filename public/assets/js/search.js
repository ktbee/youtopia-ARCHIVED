$(document).ready(function(){
  var $vidEmbeds = $('iframe');
  var embedConfig = '?autoplay=1&controls=0&showinfo=1';
  var vidEmbedSrc = "https://www.youtube.com/embed/";
  var searchTerm = window.location.pathname;
  searchTerm = searchTerm.substr(1);

  // Get newest vid ID and add it to the embed code
  $.get( "/get/search/" + searchTerm ).then((data) => {
    var vidIds = data.vidIds;

    console.log('searchTerm: ', searchTerm);
    $.each( $vidEmbeds, ( index, embed ) => {
      var vidEmbedSrc = $(embed).attr('src');
      $(embed).attr('src', vidEmbedSrc + vidIds[index] + embedConfig);
    });

  });
});
