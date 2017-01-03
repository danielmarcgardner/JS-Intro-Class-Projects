$(document).ready(function(){
//Q1 Help
  $("#1").click(function(){
    $("#hidden1").css("display", "inline")
  })
// Q1 Answer
  $('#submitBtn').click(function(){
    var text= $("#textInput").val();
    $("<h3>" + text + "</h3>").insertAfter("#submitBtn");
  })
  //Q2 Help
  $("#2").click(function(){
    $("#hidden2").css("display", "inline")
  })
  //Q2 Answer
  $(".chex").click(function () {
        $("h2").toggleClass("hidden");
    });
//Q3 Help
  $("#3").click(function(){
    $("#hidden3").css("display", "inline")
  })
  //Q3 Answer
   $(".table-striped").append("<tr><td>Mittens Jr.</td><td>11</td><td>Hangry</td></tr>")
//Q4 Help
  $("#4").click(function(){
    $("#hidden4").css("display", "inline")
  })
  //Q4 Answer
  $(".table-striped tbody").children().each(function () {
         var hungerLevel = $(this).children("td:nth-child(3)");
         if (hungerLevel.text() === "Content") {
             $(hungerLevel).css("color", "green");
         } else {
             $(hungerLevel).css("color", "red");
         }
     })
    //  Q5 Help
  $("#5").click(function(){
    $("#hidden5").css("display", "inline")
  })
  // Q5 Answer
$('.btn-warning').click(function(){
  $(".table-striped tbody").children().each(function () {
    var heavy= $(this).children('td:nth-child(2)');
    if (heavy.text()<=10) {
      $(this).hide()
    }
  })
})
// Q6 Help
  $("#6").click(function(){
    $("#hidden6").css("display", "inline")
  })
  // Q6 Answer
  $('.btn-success').click(function(){
    $(".table-striped tbody").children().each(function () {
      var name=$(this).children('td:nth-child(1)')
      name.text(name.text().toUpperCase()+"!!!")
    })
  })
  // Q7 Help
  $("#7").click(function(){
    $("#hidden7").css("display", "inline")
  })
  // Q7 Answer
  $('.btn-primary').click(function(){
    $(".table-striped").toggle()
  })
//Q8 Help
  $("#8").click(function(){
    $("#hidden8").css("display", "inline")
  })
  // Q8 Answer
  $('#disableUs input').prop('disabled', true)
  $("#disableUs a").click(function (dontOpen) {
   dontOpen.preventDefault();
});
// Q9 Help
  $("#9").click(function(){
    $("#hidden9").css("display", "inline")
  })
  // Q9 Answer
$(".dropdown").change(function(){
  var value=$(this).find('option:selected').text()
  $("<h3>" + value + "</h3>").insertAfter(".dropdown");
})
  // Q10 Help
  $("#10").click(function(){
    $("#hidden10").css("display", "inline")
  })
  // Q10 Answer



      var count = 0;
      $("#alertList").children().each(function () {
          count += 1;
          update();
      });

      $("#alert10").click(function () {
          alert(count);
      });

      $(".btn-secondary").click(function () {
          $("#alertList").append("<li>New Item</li>");
          count += 1;
          update();
      });

      $(".btn-danger").click(function () {
          $("#alertList").children('li:last-child').remove();
          count -= 1;
          update();
      });

  // Q11 Help
  $("#11").click(function(){
    $("#hidden11").css("display", "inline")
  })
// Q11 Answer
$("<button class='btn btn-add'>add</button>").insertBefore("#alertList");
$("<button class='btn btn-remove'>remove</button>").insertBefore("#alertList");
$(".btn-add").click(function () {
    $("#alertList").append("<li>New Item</li>");
    count += 1;
    update();
});

$(".btn-remove").click(function () {
    $("#alertList").children('li:last-child').remove();
    count -= 1;
    update();
});

// Q12 Help
  $("#12").click(function(){
    $("#hidden12").css("display", "inline")
  })
// Q12 Answer
function update() {
     $("#displayList12").text("The count is: " + count);
 }
});
