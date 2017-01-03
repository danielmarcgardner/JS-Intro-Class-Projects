/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/
$(document).ready(function() {


  var $Form = $('form');

  $Form.on('submit', function(event) {
    event.preventDefault();  // Override the browser action - helps prevent strange problems

    var apiURLCall; // API Call URL to OMBD
    var movieTitle; // The Movie Title from the Input
    var year; //The year of the movie
    var ombdData; // The Object with all the cool Data

    // Takes the value from the HTML input and puts it into the variable
    movieTitle = $Form.find('#movie').val();
    year= $Form.find('#year').val();

    // Adds the movieTitle into the full API call URL.
    apiURLCall = 'http://www.omdbapi.com/?t=' + movieTitle + '&y='+year;
    console.log(apiURLCall)

    // AJAX call to pull in the data
    $.ajax(apiURLCall, {
      complete: function(p_oXHR, p_sStatus) {

        // Put the Data into this object
        ombdData = $.parseJSON(p_oXHR.responseText);


        // List entire Data found
        $('h2').text(ombdData['Title']);
        $('#image').html('<img src="'+ombdData['Poster']+'"/>')
        $('#date').html('<b>Date: </b>'+ombdData['Released']);
        $('#rating').html('<b>Date: </b>'+ombdData['Rated']);
        $('#director').html('<b>Director: </b>'+ombdData['Director']);
        $('#actors').html('<b>Actors: </b>'+ombdData['Actors']);
        $('#plot').html('<b>Plot: </b>'+ombdData['Plot']);
        $('#review').html('<b>IMDB Rating: </b>'+ombdData['imdbRating']);
        $('#imbd').html('<b>IMDB Page: </b> href=<img src="'+ombdData['imdbID']+'"/>');


      }
    });
  });




});
