let button = document.getElementById("play-button");
button.addEventListener("click", ifButtonPressed);
button.addEventListener("mouseover", hover);
let title = document.getElementById("page-title");
title.addEventListener("copy", ifCopied);



function ifButtonPressed() {
	button.style.top = Math.random() * 100 + "%";
	button.style.left = Math.random() * 100 + "%";
}
function hover() {
	button.style.backgroundColor = "blue";
}


function ifCopied() {
	let alert = document.createElement("h1");
	alert.innerHTML = "DON'T COPY THIS";
	title.appendChild(alert);
}


let text = document.getElementById("challenge-one");
text.addEventListener("dblclick", ifTextPressed);

function ifTextPressed() {
	let html = document.getElementsByTagName("HMTL");
	let body = html[1]
	body.removeChild(text);
}