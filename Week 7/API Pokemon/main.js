//setting up the page and the wheel
$(document).ready(function(){
  $("#random").removeClass('hidden');
  wheel = new wheelnav('wheelDiv');
  wheel.wheelRadius = 120;
  wheel.titleRotateAngle = -45;
  wheel.colors = colorpalette.gamebookers;
  wheel.slicePathFunction = slicePath().DonutSlice;
  wheel.titleAttr = { fill: "#FFF" };
  wheel.titleSelectedAttr = { fill: "#111" };
  wheel.titleHoverAttr = { fill: "#111" };
  wheel.createWheel(["Random", "Color", "Name", "ID"]);

  wheel.navItems[0].navigateFunction = function(){
    $('#buttons').empty()
  $('#buttons').append('<div class="btn btn-success" id="random" onclick="randomPoke();">Give me a random Pokémon!</div>')
};
  wheel.navItems[1].navigateFunction = function () {
    $('#buttons').empty()
    $('#buttons').append('<p><select class="form-control color"><option>black</option><option>blue</option><option>brown</option><option>gray</option><option>green</option><option>pink</option><option>purple</option><option>red</option><option>white</option><option>yellow</option></select></p>')
    $('#buttons').append('<div class="btn btn-success" id="color" onclick="colorPoke();">Search By Pokemon Color!!</div>')
  };
  wheel.navItems[2].navigateFunction = function () {
    $('#buttons').empty()
    $('#buttons').append('<p><input class="form-control name"</p>')
    $('#buttons').append('<div class="btn btn-success" id="color" onclick="namePokemon();">Search By Pokemon By Name!!</div>')
  };
  wheel.navItems[3].navigateFunction = function () {
    $('#buttons').empty()
    $('#buttons').append('<p><input class="form-control id"</p>')
    $('#buttons').append('<div class="btn btn-success" id="color" onclick="idPoke();">Search By Pokemon By Name!!</div>')
  };

})


//Call the random pokemon
function randomPoke(){
  var random = Math.floor(Math.random()*721)
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/'+random);
  $xhr.done(function(data) {
     if ($xhr.status !== 200) {
         return;
     }
    //  Pokemon data
  $('#result').empty()
  $('#result').append("<p>Pokemon: "+data['name']+"</p>")
   $('#result').append("<p>Pokemon #: "+random+"</p>")
   $('#result').append("<p>Height: "+data['height']+"</p>")
   $('#result').append("<p>Weight: "+data['weight']+"</p>")
   $('#result').append('<img src="'+data['sprites']['front_default']+'"/>')

   });
}
//Search by name of the Pokemon
function namePokemon(){
  var name = $('.name').val()
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/'+name);
  $xhr.done(function(data) {
     if ($xhr.status !== 200) {
         return;
     }
     $('#result').empty()
     $('#result').append("<p>Pokemon: "+data['name']+"</p>")
      $('#result').append("<p>Height: "+data['height']+"</p>")
      $('#result').append("<p>Weight: "+data['weight']+"</p>")
      $('#result').append('<img src="'+data['sprites']['front_default']+'"/>')
});
}

function idPoke(){
  var id = $('.id').val()
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/'+id);
  $xhr.done(function(data) {
     if ($xhr.status !== 200) {
         return;
     }
  $('#result').empty()
  $('#result').append("<p>Pokemon: "+data['name']+"</p>")
   $('#result').append("<p>Height: "+data['height']+"</p>")
   $('#result').append("<p>Weight: "+data['weight']+"</p>")
   $('#result').append('<img src="'+data['sprites']['front_default']+'"/>')

   });
}
//Search by color of Pokemon!
function colorPoke(){
  var color = $('.color').val()
  console.log(color)
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon-color/'+color);
  $xhr.done(function(data) {
     if ($xhr.status !== 200) {
         return;
     }
     $('#result').empty()
     for (var i = 0; i < 10; i++) {
       $('#result').append("<p>"+data['pokemon_species'][i]['name']+"</p>")
     }


});
}
