/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");


// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.

var me = {
  name:"Daniel",
  city:"San Francisco",
  jobTitle:"Development Associate",
}

document.getElementById("q1").innerHTML="<p>Name: "+me.name+"</p>"+"<p> City: "+me.city+"</p>"+"<p> Job Title: "+me.jobTitle+"<p>"

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }


me.family=['Mom', ' Dad', ' Milo',' Annelys']

document.getElementById("q2").innerHTML="<p>Name: "+me.name+"</p>"+"<p> City: "+me.city+"</p>"+"<p> Job Title: "+me.jobTitle+"</p>"+"<p>Family: "+me.family+"</p>"


// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.

document.getElementById("q3a").innerHTML=me.city;
document.getElementById("q3b").innerHTML=me["city"];







// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById("q4").innerHTML="<p> Penny's Dinner Choices: "+invitees.adults[0].dinnerChoice+"</p>"
// 5. Access Pablo's table number.
document.getElementById("q5").innerHTML="<p> Pablo's Table: "+invitees.children[1].table+"</p>"
// 6. Access Lauren's seating specialConsideration.
document.getElementById("q6").innerHTML="<p> Laura's Special Seating: "+invitees.adults[2].specialConsiderations.seating+"<p>"
// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById("q7").innerHTML="<p> Billy's Dessert Choice: "+invitees.adults[1].dinnerChoice[2]+"</p>"
// 8. Access Ada's allergies.
document.getElementById("q8").innerHTML="<p> Ada's Allergies: "+invitees.children[2].allergies+"</p>"
// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

document.getElementById("q9").innerHTML="<p> Lauren's appetizer is "+invitees.adults[2].dinnerChoice[0]+
". She will be eating: "+invitees.adults[2].dinnerChoice[1]+" for dinner and has selected "+invitees.adults[2].dinnerChoice[2]
+" for her dessert</p>"




// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
var jsWorkshop = {}

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.
jsWorkshop.classmates =["David", "Denny", "Mohammed", "Kurtis", "Kevin"]
document.getElementById("q11").innerHTML=jsWorkshop.classmates
// 12. Get the length of the fourth classmate's name.
document.getElementById("q12").innerHTML=jsWorkshop.classmates[3].length
// 13. Clear the classmates value.
jsWorkshop.classmates=''
document.getElementById("q11").innerHTML=jsWorkshop.classmates





// ADVANCED TRACK
// A. Create an empty object called "books".
var books={}

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

var book1={
  title: "You Had Me at Woof",
  author: "Julie Klum",
  pages: 207
}
var book2={
  title: "The Catcher in the Rye",
  author: "JD Salinger",
  pages: 214
}
var book3={
  title: "Bangkok Haunts",
  author: "John Burdett",
  pages: 569,
}
books.ISBN22222=book1
books.ISBN33333=book2
books.ISBN44444=book3


console.log(books)
document.getElementById("qb").innerHTML = "Check the Console!";

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// C. Access the author of the first book.
document.getElementById("qc").innerHTML=books.ISBN22222.author

// D. Get the length of the author the the third book.
document.getElementById("qd").innerHTML=books.ISBN44444.author.length

// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
books.ISBN22222.dateRead="June 1, 2015",
books.ISBN33333.dateRead="June 1, 2014",
books.ISBN44444.dateRead="June 1, 2013",

document.getElementById("qe").innerHTML="<p>"+books.ISBN22222.title+"was read: "+books.ISBN22222.dateRead+"</p>"+"<p>"+books.ISBN33333.title+"was read: "+books.ISBN33333.dateRead+"</p>"+"<p>"+books.ISBN44444.title+"was read: "+books.ISBN44444.dateRead+"</p>";

// F. Remove the second book from the books object.
books.ISBN33333='';

// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
