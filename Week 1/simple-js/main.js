// JavaScript Document



// Use JS to add header text into 'main-header' without button click.
document.getElementById("main-header").innerHTML = "<h1>JS Practice Daniel</h1>";



// Use JS to add paragraph text into 'action1-message' with button click from 'action1-btn'. -->
document.getElementById("action1-btn").addEventListener("click", function(){
    document.getElementById("action1-message").innerHTML = "Blue";
});



// Use JS to add an h2 into 'heading2' with button click.
// The HTML has been created, this is your chance to add JS.
document.getElementById("header2-btn").addEventListener("click", function(){
  document.getElementById("header2-message").innerHTML="Dogs";
});




// Create 3 examples of JS being added to the HTML page immediately.
// You'll need to create both the HTML and JS for this.
document.getElementById("subheader").innerHTML="<h2>This page was built by Daniel</h2>";
document.getElementById("footer").innerHTML="<p>Modified by Daniel Gardner<p>";
document.getElementById("subsubheader").innerHTML="<p>With the help of Galvanize<p>";






// Create 3 examples of JS being added to the HTML page based on button clicks.
// You'll need to create both the HTML and JS for this.
document.getElementById("food").addEventListener("click", function(){
  document.getElementById("food-message").innerHTML="Sushi, burgers, pizza, or really anything thats not super healthy haha";
});
document.getElementById("drink").addEventListener("click", function(){
  document.getElementById("drink-message").innerHTML="Tea, craft beers, craft sodas, hard cider, and some cocktails";
});
document.getElementById("hobbies").addEventListener("click", function(){
  document.getElementById("hobbies-message").innerHTML="Event Planning, Learning to Code, Eating out, and Spending time with my GF";
});
