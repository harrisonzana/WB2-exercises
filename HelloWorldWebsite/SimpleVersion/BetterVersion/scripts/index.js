"use strict";

console.log("index.js begin")

window.onload = init;
function init() {
const helloBtn = document.getElementById("helloBtn");
helloBtn.onclick = onHelloBtnClicked;
console.log("index.js init")
}
function onHelloBtnClicked() {
alert("Hi there!");

console.log()
}