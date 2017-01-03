/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings ="I am feel like I can always use practice"
document.getElementById("q2").innerHTML = feelings;





// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name ="Daniel"
var message="Hello "
document.getElementById("q3").innerHTML = message + name;






// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.


var x =10;
var y=15;
var addition =x+y;
var subtract=x-y;
var multiply=x*y;
var division=x/y;
document.getElementById("q4a").innerHTML = addition;
document.getElementById("q4b").innerHTML = subtract;
document.getElementById("q4c").innerHTML = multiply;
document.getElementById("q4d").innerHTML = division;


// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var string1="Milo is";
var string2="a Dog";
var strings=string1 + " " + string2;
document.getElementById("q5").innerHTML=strings;





// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.
document.getElementById("q6a").innerHTML="5"+"3";
document.getElementById("q6b").innerHTML="5"-"3";
document.getElementById("q6c").innerHTML="5"*"3";
document.getElementById("q6d").innerHTML="5"/"3";
document.getElementById("q6note").innerHTML="Question 1 literally puts the numbers \
together. Question 2 subtracts. Question 3 multiplies. Question 4 divides."




// 7. When a button is clicked, add content into the ID "q7".
document.getElementById("q7").classList.add("hide");

document.getElementById("callAlert").addEventListener("click", function () {
  document.getElementById("q7").classList.remove("hide");
  document.getElementById("q7").classList.add("show")
});







// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.


document.getElementById("callDoubleNum").addEventListener("click", function() {
  var num = document.getElementById("doubleNum").value;
  var message = num*2;
  document.getElementById("q8").innerHTML = message;
});



// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1=5;
var num2=10
if (num1>num2) {
  document.getElementById("q9").innerHTML = "Yes, the value of num1 is greater than num2";

} else {
  document.getElementById("q9").innerHTML = "No, the value of num1 is not greater than num2";

}





// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score=87
if (score>=90) {
  document.getElementById("q10").innerHTML="Great Job"
}
if (90>score && score>=60){
  document.getElementById("q10").innerHTML="Nice work, keep practicing"
}
if (score<=59){
  document.getElementById("q10").innerHTML="Very bad: study more and retake the test"
}





// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById("submit").addEventListener("click", function() {
  var name=document.getElementById("name").value;
  var years=document.getElementById("years").value;
  var city=document.getElementById("city").value;
    document.getElementById("qa").innerHTML = "My name is " +name+". " + "I'm "+years+" years old, and I live in " +city+".";
});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var x=2;
var y=3;
var areaqb = x*y;
document.getElementById("qb").innerHTML=areaqb




// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById("submit-qc").addEventListener("click", function(){
  var l =document.getElementById("length").value;
  var h =document.getElementById("height").value;
  var area=l*h;
  document.getElementById("qc-answer").innerHTML=" "+area;
});





// D. Have the user enter their name into a textfield. When they click a button,
//find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById("submit-qd").addEventListener("click", function(){
  var n=document.getElementById("name-length").value;
  var nl=n.length;
  document.getElementById("qd").innerHTML=nl;
});






// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad
document.getElementById("submit-qe").addEventListener("click", function() {
  var scoreqe=document.getElementById("qe-number").value;
  if (scoreqe>=90) {
    document.getElementById("qe").innerHTML="Great Job"
    document.getElementById("qe").classList.remove("status-ok")
    document.getElementById("qe").classList.remove("status-bad")
    document.getElementById("qe").classList.add("status-good");
  }
  if (90>scoreqe && scoreqe>=60){
    document.getElementById("qe").innerHTML="Nice work, keep practicing"
    document.getElementById("qe").classList.remove("status-good")
    document.getElementById("qe").classList.remove("status-bad")
    document.getElementById("qe").classList.add("status-ok");
  }
  if (scoreqe<=59){
    document.getElementById("qe").innerHTML="Very bad: study more and retake the test"
    document.getElementById("qe").classList.remove("status-ok")
    document.getElementById("qe").classList.remove("status-good")
    document.getElementById("qe").classList.add("status-bad");
}
});


document.getElementById("truth-submit").addEventListener("click", function() {
  var t1=document.getElementById("truthchecker1").value
  var t2=document.getElementById("truthchecker2").value
  if (t1===t2){
    document.getElementById("eq1").innerHTML="True!"
    document.getElementById("eq1").classList.remove("false-checker")
    document.getElementById("eq1").classList.add("truth-checker");
  }
  if (t1!=t2){
  document.getElementById("eq1").innerHTML="False!"
  document.getElementById("eq1").classList.remove("truth-checker")
  document.getElementById("eq1").classList.add("false-checker");
}
});

document.getElementById("num-submit").addEventListener("click", function() {
  var actual=23
  var userguess=document.getElementById("guess").value
if (actual==userguess) {
  document.getElementById("eq2").innerHTML="Correct!"
  document.getElementById("eq2").classList.remove("too-high")
  document.getElementById("eq2").classList.remove("too-low")
  document.getElementById("eq2").classList.add("correct");

}
  if (actual<userguess) {
    document.getElementById("eq2").innerHTML="Too High!"
    document.getElementById("eq2").classList.remove("correct")
    document.getElementById("eq2").classList.remove("too-low")
    document.getElementById("eq2").classList.add("too-high");
  }
  if (actual>userguess) {
    document.getElementById("eq2").innerHTML="Too Low!"
    document.getElementById("eq2").classList.remove("too-high")
    document.getElementById("eq2").classList.remove("correct")
    document.getElementById("eq2").classList.add("too-low");
  }
});
/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
