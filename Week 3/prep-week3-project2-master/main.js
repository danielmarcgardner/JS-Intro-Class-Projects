/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(a,b){
  if (a<b){
    return a+" is smaller"
  }
  else if (a>b) {
    return b+" is smaller"
  }
  else {
    return a+" and "+b+" are equal!"
  }
}

document.getElementById("q1button").addEventListener("click",function(){
  var a = document.getElementById("q1inputa").value
  var b = document.getElementById("q1inputb").value
  document.getElementById("q1").innerHTML=minimum(a,b)
})


// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(x,y,z){
  if (x<y && x<z && y<z){
    return x+" Is the smallest!!"
  }
  else if (x<y && x>z && z<y) {
    return z+" Is the smallest!"
  }
  else if (x>y && x>z && z>y) {
    return y+" Is the smallest"
  }
  else if (x=y && x>z) {
    return z+" Is the smallest!"
  }
  else if (x=z && x>y) {
    return y+" Is the smallest!"
  }
  else if (z=y && x<z) {
    return x+" Is the smallest!"
  }
else if (x=y && x<z) {
  return x+y+" Is the smallest!"
}
else if (x=z && x<y) {
  return x+z+" Is the smallest!"
}
else if (z=y && x>z) {
  return z+y+" Is the smallest!"
}
  else {
    return x+" "+" "+y+" "+z+"are all the same"
  }
}

document.getElementById("q2button").addEventListener("click",function(){
  var x = document.getElementById("q2inputa").value
  var y = document.getElementById("q2inputb").value
  var z = document.getElementById("q2inputc").value
  document.getElementById("q2").innerHTML=minimum3(x,y,z)
})

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.
var array3 = [1,2,3,4]

function sum(array3){
var ww= array3[0];
var xx= array3[1]
var yy= array3[2]
var zz= array3[3]
return (ww+xx+yy+zz)
}

document.getElementById("q3").innerHTML=sum(array3)



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.
var array4=[1,2,3,4]

function multiply(array4){
  var dd=array4[0]
  var ee=array4[1]
  var ff=array4[2]
  var gg=array4[3]
  return (dd*ee*ff*gg)
}
document.getElementById("q4").innerHTML=multiply(array4)





// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(){
  var result = []
  for (var i = 0; i < words.length; i++) {
    if (words[i].length>=6) {
      result.push(words[i])
    }
  }
  return result
}
document.getElementById("q5").innerHTML=filterSixPlus()




// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function converterc(c){
  var f= ((c*2)+32)
  return f
}

document.getElementById("q6submit").addEventListener("click", function(){
  var c= document.getElementById("q6input").value
  document.getElementById("q6").innerHTML=converterc(c)
})


// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

function whichConverter(userconvert, userdegree){
  if (userconvert == "F to C") {
    return ((userdegree-32)/2)
  }
  else if (userconvert == "C to F") {
    return ((userdegree*2)+32)
  }
  else {
    return "Please specify F to C or C to F"
  }
}

document.getElementById("q7submit").addEventListener("click", function() {
    var userdegree = document.getElementById("q7inputa").value
    var userconvert = document.getElementById("q7inputb").value
    document.getElementById("q7").innerHTML = whichConverter(userconvert, userdegree)
  });

// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(manyB){
var resultb = 0
  for (var i = 0; i < manyB.length; i++) {
  if (manyB.charAt(i)==="B") {
    resultb+=1
  }
  }
  return resultb
}

document.getElementById("q8submit").addEventListener("click", function() {
    var manyB = document.getElementById("q8input").value
    document.getElementById("q8").innerHTML=countBs(manyB)
  });

// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!







// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countChars(string, letter){
  var resultletter =0
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      resultletter +=1
    }
  }
  return resultletter
}

document.getElementById("qasubmit").addEventListener("click", function() {
  var string = document.getElementById("qainput1").value;
  var letter = document.getElementById("qainput2").value;
  document.getElementById("qa").innerHTML = countChars(string, letter)
});



// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.
function ohZero(zeros){
  var enterzeros=zeros.split("")
  for (var i = 0; i < zeros.length; i++) {
    if (zeros[i] ==="o" || zeros[i]==="O") {
      enterzeros[i]=0
    }
  }
  return enterzeros.join("")
}

document.getElementById("qbsubmit").addEventListener("click", function(){
  var zeros=document.getElementById("qbinput").value;
  document.getElementById("qb").innerHTML = ohZero(zeros)
})




// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function bottlesOfBeers(numberOfBottles) {
  for (beer = numberOfBottles; beer > 0; beer--) {
    remainder = beer - 1;
    if (beer != 1) {
      beercase = "bottles";
    } else {
      beercase = "bottle";
    }

    if (remainder != 1) {
      remaindercase = "bottles";
    } else {
      remaindercase = "bottle";
    }

    console.log(beer + " " + beercase + " of beer,");
    console.log("Take 1 down, pass it around,");
    if (remainder != 0) {
      console.log(remainder + " " + remaindercase + " of beer on the wall.");
    } else {
      console.log("No more bottles of beer on the wall.");
    }
  }
}
bottlesOfBeers(99)
;




// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.


function guessinggame(userguess){
while (userguess != computer) {
  if (userguess>computer) {
    return "Too High!!"+computer
  }
  else if (userguess<computer) {
    return "Too Low!!!"+computer
  }
  else {
    return "Invalid submission!"+computer
  }
}
return "Correct! The computer's number is "+computer
}

var computer = Math.floor(Math.random()*10)
document.getElementById("qdbutton").addEventListener("click", function(){
  var userguess=document.getElementById("qdinput").value;
  document.getElementById("qd").innerHTML = guessinggame(userguess);
})
