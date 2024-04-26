"use strict";

console.log("index.js begin")

window.onload = init;
function init() {
const helloBtn = document.getElementById("Hello Zana!");
helloBtn.onclick = onHelloBtnClicked;
console.log("index.js init")
}
function onHelloBtnClicked() {
alert("Hello Zana!");
}
console.log()