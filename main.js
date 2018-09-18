function apiCall() {
  var randomMovie = document.getElementsByName("movie name")[0].value;
  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie) + "&apikey=b41091b7", function(response) {
    //console.log(response);
    var reviews = response.Ratings;

    for ( var i = 0; i < reviews.length; i++ )
    {

      console.log(reviews[i].Value);
    }

    //console.log(reviews);
    var image = response.Poster;
    //console.log(response.Plot);
    var plot = response.Plot;
    $('p#movieplot').text(plot);
    if(image !== "N/A" ) {
      $('img').attr('src', image);
    }
  });
}

$('button').click(function() {
  apiCall();
  $('h1#reviews').removeClass("hidden")
});
