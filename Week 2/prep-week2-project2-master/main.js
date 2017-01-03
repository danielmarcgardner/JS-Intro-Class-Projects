/*
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check
within the console for verification of the array.

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.
var Empty = []
Empty[0]= "Curtis"
Empty[1]= "Daniel"
Empty[2]= "Kevin"
Empty[3]= "David"

document.getElementById("q1").innerHTML =Empty




// 2. Add an additional item to the beginning of your array.

Empty.unshift("Denny")
document.getElementById("q2").innerHTML= Empty





// 3. Remove the second and third items in your array.
Empty.splice(1,2)
document.getElementById("q3").innerHTML=Empty





// 4. Add two new items after the second item.
Empty.splice(2,0,"Pavan", "Annelys")
document.getElementById("q4").innerHTML=Empty





// 5. Log to the console: 'The current length of the array is....' using the .length method
console.log("the current length of the array is "+Empty.length)

document.getElementById("q5").innerHTML="Check Console"




// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
things [2] ="keyboard"
document.getElementById("q6").innerHTML=things





// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var elements=things.join()
document.getElementById("q7").innerHTML=elements




// 8. Remove the first item.
things.splice(0,1)
document.getElementById("q8a").innerHTML=things;







// 9. Remove all items from the things array.
things.splice(0,4)
document.getElementById("q9").innerHTML=things





// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople

people.sort()
document.getElementById("q10").innerHTML=people





// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

var totalarray = [array1, array2, array3]

document.getElementById("q11").innerHTML=totalarray;





// 12. Remove "Sparky" and "White" from the above array of arrays.
array1.splice(3,1)
array3.splice(0,1)

document.getElementById("q12").innerHTML=totalarray






// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.
var lastItem=[];
var lastItem = [campingItems.pop()];
document.getElementById("q13").innerHTML=lastItem;




// 14. Add two new items to lastItem, one at the beginning and one at the end.
lastItem.push ("boots");
lastItem.unshift("jacket")
document.getElementById("q14").innerHTML=lastItem;


// 15. Add s'mores to the lastItem array.

lastItem.push ("s'mores");
document.getElementById("q15").innerHTML=lastItem;




// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.

lastItem.sort()
reversedItems =[lastItem.reverse()]
document.getElementById("q16").innerHTML=reversedItems;


// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = [firstArray, secondArray];
document.getElementById("q17").innerHTML=numberPets;



// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55,42, 77,41, 300];
// If it doesn't sort as expected, explain why.

sortingNumbers.sort(function(a,b){
  return a-b
});

document.getElementById("q18").innerHTML=sortingNumbers;











/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
