/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Output each item in the following Array to your console within their own paragraphs:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for (i = 0; i < livingRoom.length; i++) {
    console.log("<p>" + livingRoom[i] + "</p>");
}
document.getElementById("q1").innerHTML="Check Console"



// 2. Using a loop, log numbers 22-33 within their own paragraphs.
for (i =22; i<34; i++) {
  document.getElementById("q2").innerHTML+="<p>"+i+"</p>"
}





// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
for (i=75; i<101; i+=5){
  document.getElementById("q3").innerHTML+="<p>"+i+"</p>"
}




// 4. Write a while loop that displays paragraphs of "This is how a professional loops." to the HTML page 5 times.
var i=0;
while (i<5){
  i+=1;
document.getElementById("q4").innerHTML+="<p>This is how a professional loops</p>"
}




// 5. Separately, use both a for loop and while loop to do the same thing.
//     Display in unique paragraphs the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.
for (i=10;i<111;i+=25){
document.getElementById("q5a").innerHTML+="<p>"+"At home, I have "+i+" cats"+"</p>"
}
//Why does it change so drastically moving the i+=25 before or after the innerHTML
var i=10
while (i<=110){
  document.getElementById("q5b").innerHTML+="<p>"+"At home, I have "+i+" cats"+"</p>"
  i+=25;
}


// 6. Given the following Array, display in unique paragraphs'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];
for (i=0; i<numArray.length; i++){
var num=numArray[i];
  if((num%2===0)&&(num>10)){
    document.getElementById("q6").innerHTML += "<p>"+numArray[i]+" is Even and greater than 10.</p>";
  }
  else if (num%2===0){
    document.getElementById("q6").innerHTML += "<p>"+numArray[i]+" is Even</p>";
  }
  else {
    document.getElementById("q6").innerHTML += "<p>"+numArray[i]+" is Odd</p>"
  }
}





// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];

var numThrees = []
for (i=0; i<numArray.length; i+=3) {
  numThrees.push(numArray[i]);
}

document.getElementById("q7").innerHTML += "<p>" + numThrees + "</p>";





// 8. Write a loop that outputs the following to unique paragraphs:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hash=""
for (i=0; i<8; i++){
  hash+= "#"
  document.getElementById("q8").innerHTML+="<p>"+hash+"</p>"
}





// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

for (i=0;i<101; i++) {
  if (i % 5 === 0 && i % 3 === 0){
    document.getElementById("q9").innerHTML+= "<p>"+i+" FizzBuzz"+"</p>";
  }
  else if (i % 5 === 0) {
    document.getElementById("q9").innerHTML+= "<p>"+i+" Buzz"+"</p>";
  }
  else if (i % 3 === 0){
    document.getElementById("q9").innerHTML+= "<p>"+i+" Fizz"+"</p>";
  }
  else {
      document.getElementById("q9").innerHTML+="<p>"+i+"</p>";
  }
}



// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.
document.getElementById("compare").addEventListener("click", function(){
var userChoice = document.getElementById("usersubmission").value;
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

document.getElementById("message2").innerHTML="The computer chooses: "+ computerChoice
  if (userChoice === computerChoice) {
    document.getElementById("message").innerHTML="Tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      document.getElementById("message").innerHTML="You Win: Rock beats Scissors!";
    } else {
      document.getElementById("message").innerHTML="You Lose: Paper beats Rock!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      document.getElementById("message").innerHTML="You win: Paper beats Rock!";
    } else {
      document.getElementById("message").innerHTML="You lose: Scissors beats Paper!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById("message").innerHTML="You win: Rock beats Scissors!";
    } else {
      document.getElementById("message").innerHTML="You lose: Scissors beats Rock!";
    }
  } else if (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors") {
    document.getElementById("message").innerHTML="Fail! Enter Rock, Paper, or Scissors to play!";
  }
});











// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]
var biggestNum=largestNum[0]

for (i=0; i<largestNum.length; i++){
  if (largestNum[i]>biggestNum){
    biggestNum=largestNum[i]
  }
}

document.getElementById("q16").innerHTML += "The largest number is " + biggestNum;



// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:

//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)


var coin = Math.floor(Math.random() * 2);
var sides = ["heads", "tails"];
var result = sides[coin];
document.getElementById("q17").innerHTML += result;





// 18. Use a do/while loop to keep flipping the coin until you get tails.
var coin = Math.floor(Math.random() * 2);
var sides = ["heads", "tails"];
var result = sides[coin];

while (result==="heads"){
  var coin=Math.floor (Math.random()*2);
  if (coin ===1){
    result="heads";
    document.getElementById("q18").innerHTML += "<p>Heads..bummer..</p>";
  }
  else {
    result="tails";
    document.getElementById("q18").innerHTML += "<p>Hurray, you got tails!</p>";
  }
}





// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #


var size = 8;

var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ( (x+y) % 2 == 0){
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board)





// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var size = 20;

var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ( (x+y) % 2 == 0){
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board)








/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
