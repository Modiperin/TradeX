console.log("Function load now");

var i = 0;
// Get the element you want to add the span to
var element = document.getElementById("Welcome");

// Create a new span element

var span = document.createElement("span");
// Set the innerHTML of the span element
span.innerHTML = ".";

// Add the span element to the existing element
element.appendChild(span);
var txt = 'Coming Soon..';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome() {
  if (i < txt.length) {
    document.getElementById("Welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcome, speed);
  } else {
    var dots = document.querySelectorAll("#Welcome > span");
    setInterval(function() {
      if (dots.length > 0) {
        var lastDot = dots[dots.length - 1];
        lastDot.style.visibility = lastDot.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 500); // Change the duration of the blink as desired
  }
}
