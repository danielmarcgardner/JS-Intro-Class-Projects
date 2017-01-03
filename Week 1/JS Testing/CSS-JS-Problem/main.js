document.getElementById("credit").classList.add("hide");
//add style//
document.getElementById("button-add").addEventListener("click", function() {
   document.getElementById("message").classList.add("text-style");
});
//delete style//
document.getElementById("button-delete").addEventListener("click", function() {
   document.getElementById("message").classList.remove("text-style");
});
//add credit//
document.getElementById("button-credit").addEventListener("click", function() {
  document.getElementById("credit").classList.add("show");
});
//delete credit//
document.getElementById("button-hide-credit").addEventListener("click", function() {
  document.getElementById("credit").classList.remove("show");
});
