/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$('.changeColor').click(function(){
  $("li:nth-child(3)").css('color','#8A2BE2')
})

// Question #2
$('li:nth-child(4)').click(function(){
  $(this).append('<li>New Line!!!</li>')
})

// Question #3
$('#removeLi').click(function(){
  $('li:nth-child(2)').remove()
})

// Question #4
$('li:last').click(function(){
  $(this).css('font-size', '40px')
  $('li:nth-child(-n+4)').remove()
})

// Question #5
$('img.cute').click(function(){
  $(this).clone(true).appendTo('div.clones')
})

// Question #6
$(document).dblclick(function(){
  $('#makeSquare').css({'width':'120px', 'border-radius': '0'})
})


// Question #7
$('.swatch').click(function(){
  var url = $(this).css('background')
  $('body').css('background', url)
})


  // Question #8
$('#hover').hover(function(){
  $(this).css('color','red')
})
$('#hover').click(function(){
  $(this).toggleClass('green')
})



});
