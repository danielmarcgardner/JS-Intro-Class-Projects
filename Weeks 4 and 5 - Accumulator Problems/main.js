/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

var array=[1,2,3]

function sum(array){
var result=0
for (var i = 0; i < array.length; i++) {
  result+=array[i]
}
return result
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(array){
  var result=[]
  for (var i = 0; i < array.length; i++) {
    result.push(array[i]*2)
  }
  return result
}

doubleNumbers(array)





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(array, xnumber){
  var result=[]
  for (var i = 0; i < array.length; i++) {
    result.push(array[i]*xnumber)
  }
  return result
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(letters){
  var result=""
  for (var i = 0; i < letters.length; i++) {
    result+=(letters[i]+letters[i])
  }
  return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(array1,array2){
  var result=[]
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i])
  }
  return result
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(number, word){
  var result=[]
  for (var i = 0; i < number; i++) {
    result.push(word)
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array){
  var result={}
  for (var i = 0; i < array.length; i++) {
    result[array[i]]=i
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject(array){
  var result={}
  for (var i = 0; i < array.length; i++) {
    result[array[i][0]]=array[i][1]
  }
  return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string){
  var result =""
  for (var i = string.length-1; i >=0; i--) {
    result+=string[i]
  }
  return result
}











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string) {
    var result = true;
    if (result===(string.length % 2 === 0)){
        if((string.substr(0,string.length / 2) === string.substr(string.length / 2))){
          return result=true
        }
        else{
          return result=false
        }
      }
      else {
        return result=false
      }
    return result;
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string){
  var result=""
  for (var i = 0; i < string.length; i+=2) {
    result+=string[i]
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/


function allEqual(string){
var result=true
  for (var i = 0; i < string.length; i++) {
    if (string[i]===string[i+1]) {
      return result=true
    }
    else {
      return result=false
    }
  }
  return result
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/


function sumLetters(string){
  var result=0
  for (var i = 0; i < string.length; i++) {
    result+=Number(string[i])
  }
  return result
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string){
  var result=0
  for (var i = 0; i < string.length; i++) {
    if (string[i]==="a"||string[i]==="e"||string[i]==="i"||string[i]==="o"||string[i]==="u") {
      result++
    }
  }
  return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string){
  var result=[]
  for (var i = 0; i < string.length; i++) {
    result.push(string[i])
  }
  return result
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string){
  var result=[]
  for (var i = 0; i < string.length; i++) {
    result.push(string.codePointAt(i))
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/


function letterMap(string){
  var result={}
  for (var i = 0; i < string.length; i++) {
    result[string[i]]=i
  }
  return result
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string){
  var result={}
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]]) {
      result[string[i]]++
    }
    else {
      result[string[i]]=1
    }

}
return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(number1,number2){
  var result=false
  var number1 =Number(number1)
  var number2 =Number(number2)
  if (number2-number1>=6) {
    return result=true
  }
  else if (number1-number2>=6) {
    return result=true
  }
  else {
    return result=false
  }
  return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fill){
  var result=""
  var length= Number(length)
  for (var i = 0; i < string.length; i++) {
    if (string.length<length) {
      return result= (fill.repeat(length-string.length)+string)
    }
    else {
      return string
    }
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number,letter){
  var result=""
  var number=Number(number)
if (number>0) {
  return result= letter.repeat(number)
}
  else {
    return result
  }
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(number){
  var result=1
  var number= Number(number)
  for (var i = 1;i<=number; i++) {
    result*=i
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number){
  var result=[]
  var number=Number(number)
  for (var i = 1; i <=number; i++) {
    result.push(i)
  }
  return result
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(number1, number2){
  var result={}
  var start=Number(number1)
  var end=Number(number2)
for (var i = start; i <=end; i++) {
  if (i%2===0 && end !=0) {
    result[[i]]="even"
  }
  else if (i%2!=0 && end!=0) {
    result[[i]]="odd"
  }
  else {
    result
  }
}
return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(numberInput, letter){
  var result ={}
  var number=Number(numberInput)
for (var i = 1; i <=number; i++) {
  result[letter.repeat([i])]=true
}
return result
}









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/



function every(array, value){
  var result= true
  for (var i = 0; i < array.length-1; i++) {
    if (array[i]===array[i+1] && array[i]===value) {
      result=true
    }
    else {
      result=false
    }
  }
  return result
}





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(array, value){
  var result=false
  for (var i = 0; i < array.length; i++) {
    if (array[i]===value) {
      result=true
    }
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(array) {
  var result = "";
  for (i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      result += " and " + array[i]
    } else if (i === array.length - 2) {
      result += array[i]
    } else {
      result += array[i] + ", "
    }
  }
  return result;
}










/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array){
  var result=""
  for (var i = 0; i < array.length; i++) {
    result+=array[i].charAt(0)
  }
  return result
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/


function min(array){
  var result
  var smallest=1000000
for (var i=0;i<array.length; i++){
  if (array[i]<=smallest) {
    smallest=array[i]
  }
  result=smallest
}
return result
}








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(array, name){
  var result = {}
  for (var i = 0; i < array.length; i++) {
    result[array[i][name]]=array[i]
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(object) {
var result={}
for (var key in object){
  result[object[key]]=key
}
return result
}




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "Fred"}, "foo" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, object){
  var result={}
  for (var key in object){
    result[key+"-signed"]=object[key]+" - "+name
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(object){
  var result=[]
  for (var key in object){
  result.push(key+" - "+object[key])
}
return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(object){
  var result=0
  for (var key in object){
result+=object[key]
  }
  return result
}






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/


function biggestProperty(obj) {
  var biggest=0;
  var result;
  for (var key in obj) {
    if (obj[key]>=biggest) {
      biggest = obj[key]
    var value = obj[key]
    if (value >= biggest) {
      result = key
    }
  }
  }
  return result;
}












/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(obj, value){
  var result
  for(var key in obj){
    if (obj[key]==value) {
      return key
    }
  }
  return result
}







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(obj, value){
  var result=false
  for (var key in obj){
    if (obj[key]===value) {
      return result=true
  }
}
return result
}

console.log(containsValue({a: 1, c: 5}, 5))




//
