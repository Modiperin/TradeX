console.log("Function load now")
var i = 0;
var txt = 'Coming Soon...';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function welcome(){
  if (i < txt.length) {
    document.getElementById("Welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(welcome, speed);
  }
}