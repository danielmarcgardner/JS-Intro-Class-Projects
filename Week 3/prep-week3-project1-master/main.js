/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funny(something){
  document.getElementById("q1").innerHTML="<p>"+ something+ " funny</p>"
}

funny("that wasn't")

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(x){
return (x/2)}

document.getElementById("q2button").addEventListener("click", function(){
  var x=document.getElementById("q2input").value
  var number= Number(x)
document.getElementById("q2").innerHTML=divideByTwo(x)
})


// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
function greeting(name1, name2){
return "Hello"+name1+ " and "+name2
}

document.getElementById("q3button").addEventListener("click", function(){
  var name1=document.getElementById("q3input1").value
  var name2=document.getElementById("q3input2").value
  document.getElementById("q3").innerHTML="<p>Hello "+name1+" and "+name2+"</p>"
})




// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.


function average(){
return Number((a+b+c+d+e+f)/6)
}

var arrayavg =[2,5,4,23,9,8]
var a= arrayavg[0]
var b= arrayavg[1]
var c= arrayavg[2]
var d= arrayavg[3]
var e= arrayavg[4]
var f= arrayavg[5]

document.getElementById("q4").innerHTML=average()


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

function cashews(price){
  return price*6
}

document.getElementById("q5button").addEventListener("click", function(){
  var price=document.getElementById("q5input").value
  document.getElementById("q5").innerHTML="Your cashew total per month is $"+cashews(price)
})


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area(height,length){
  return height*length
}
document.getElementById("q6button").addEventListener("click", function(){
  var height=document.getElementById("q6inputheight").value
  var length=document.getElementById("q6inputlength").value
document.getElementById("q6area").innerHTML="Area: "+area(height,length)
})

function perimeter(height,length) {
  return Number ((height*2)+(length*2))
}
document.getElementById("q6button2").addEventListener("click", function(){
  var height=document.getElementById("q6inputheight").value
  var length=document.getElementById("q6inputlength").value
document.getElementById("q6perimeter").innerHTML="Perimeter: "+perimeter(height,length)
})


// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter(y){
  return Number (y/4)
}
document.getElementById("q7button").addEventListener("click", function(){
  var y=document.getElementById("q7input").value
  document.getElementById("q7").innerHTML=quarter(y)
});



// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours){
  if (hours>8) {
      return "Enough Sleep!";
    }
    else {
      return "Not Enough Sleep!!";
    }

}
document.getElementById("q8button").addEventListener("click", function(){
  var hours=document.getElementById("q8input").value
  document.getElementById("q8").innerHTML=sleepings(hours)
});


// 9. Develop a function that determines a person's age by asking them for their birth year.
function age(year){
  return Number (2016-year)
}
document.getElementById("q9button").addEventListener("click", function(){
  var year=document.getElementById("q9input").value
  document.getElementById("q9").innerHTML=age(year)
});


// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

     function teams(teama,teamb){
       document.getElementById("q10").innerHTML="<p> Team A is: "+ teama+"<br>Team B is: "+teamb+"</p>"
     }
var a=[]
for (i = 0; i < teammates.length; i+=2) {
  a.push(teammates[i])
}
var b= []
for (i = 1; i < teammates.length; i+=2) {
  b.push(teammates[i])
}
teams(a,b)


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
function threeAdd(aa,bb,cc){
var aa=Number(aa)
var bb=Number(bb)
var cc=Number(cc)
return (aa+bb+cc)
}

document.getElementById("q11button").addEventListener("click", function(){
  var input=document.getElementById("q11input").value
  var aa=input[0]
  var bb=input[1]
  var cc=input[2]
  document.getElementById("q11").innerHTML=threeAdd(aa,bb,cc)
  console.log(input[0]);
})




// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.


function money(q,d,n,p){
  return Number ((q*0.25)+(d*0.10)+(n*0.05)+(p*0.01))
}
document.getElementById("q12button").addEventListener("click", function(){
  var q=document.getElementById("q12quarters").value
  var d=document.getElementById("q12dimes").value
  var n=document.getElementById("q12nickles").value
  var p=document.getElementById("q12pennies").value
  document.getElementById("q12").innerHTML="$"+money(q,d,n,p)
})








// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

function cleanNumber(phonenumber){
if (phonenumber.length<10) {
  return "Bad Number- Too Few Digits"
}
else if (phonenumber.length==10) {
  return "Good Number"
}
else if (phonenumber.length>10 && phonenumber.charAt(0)==1) {
    var clean =phonenumber.substring(1)
    return clean
  }
  else {
    return "Bad Numer - Too Many Digits"
  }
}



document.getElementById("qabutton").addEventListener("click", function() {
  var phonenumber=  document.getElementById("qainput").value;
    document.getElementById("qa").innerHTML=cleanNumber(phonenumber)
});

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

function isItaNumber(arrayOfAllTheThings){
var numOnly = []
for (var i = 0; i < arrayOfAllTheThings.length; i++) {
  if (isNaN(arrayOfAllTheThings[i])==false) {
    numOnly.push(arrayOfAllTheThings[i])
  }
}
return numOnly
}

document.getElementById("qb").innerHTML=isItaNumber(arrayOfAllTheThings)

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function rolldice(dice1,dice2){
  return dice1+dice2
}
var dice1=Math.floor(Math.random()*6)
var dice2=Math.floor(Math.random()*6)

document.getElementById("qcsubmit").addEventListener("click",function(){
document.getElementById("qc").innerHTML=rolldice(dice1,dice2)
})
// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

function monopoly(){
var total=0
  count=0

  while (total<=40) {
    dice1=Math.floor(Math.random() * 6)+1;
    dice2= Math.floor(Math.random() * 6)+1;
    var roll=dice1+dice2;
    document.getElementById("qda").innerHTML+=roll+ " ";
    total+=roll;
    console.log(total);
    count++;
  }
return "It took me "+count+ " rolls to get around the board"
}

document.getElementById("qdsubmit").addEventListener("click", function(){
document.getElementById("qdb").innerHTML+=monopoly()
});


// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
function leapYear(year){
if (year % 400===0 || (year %100 !=0 && year %4===0)){
  return "Leap Year!"
}
else if (year%100===0) {
  return "Leap Year - But Not According to Galvanize"
}
else {
  return "Not a Leap Year"
}
}
document.getElementById("qebutton").addEventListener("click", function(){
  var year=document.getElementById("qeinput").value;
  document.getElementById("qe").innerHTML = leapYear(year);
})
