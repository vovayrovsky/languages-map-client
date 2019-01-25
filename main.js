console.log("Hello, world!");

function myFunction() {
  var btn = document.createElement("button");
  var t = document.createTextNode("CLICK ME");
  btn.appendChild(t);
  document.body.appendChild(btn);
}

var c = document.getElementById("Screen");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();