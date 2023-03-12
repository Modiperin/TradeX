console.log("Function load now");

var i = 0;
// Get the element you want to add the span to
var txt = 'Coming Soon..';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome() {
  if (i < txt.length) {
    document.getElementById("Welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcome, speed);
  } else {
    // var dots = document.querySelectorAll("#Welcome > span");
    // Change the duration of the blink as desired
    var element = document.getElementById("Welcome");

    var span = document.createElement("span");
    // Set the innerHTML of the span element
    span.innerHTML = ".";

    // Add the span element to the existing element
    element.appendChild(span);
    setInterval(function () {
      if (element.length > txt) {
        // var lastDot = dots[dots.length - 1];
        span.style.visibility = span.style.visibility === "hidden" ? "visible" : "hidden";
      }
      else
      {
        span.style.visibility = span.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 500);
  }
}
// var element = document.getElementById("Welcome");

// var span = document.createElement("span");
// // Set the innerHTML of the span element
// span.innerHTML = ".";

// // Add the span element to the existing element
// element.appendChild(span);