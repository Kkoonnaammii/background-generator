var css = document.querySelector("h3"); //this empty h3 tag will enable us to add some text at the bottom of the h2 element
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// color1.addEventListener("input", function () {
// 	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";  //syntax for adding linear gradient on javascript
// })

// color2.addEventListener("input", function () {
// 	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
// })
// Then create a function so that we dont repeat ourselves in both input event listeners. And replacing the function itself with the new function

// function setGradient() {
// 	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
// }

// color1.addEventListener("input", setGradient())

// color2.addEventListener("input", setGradient())