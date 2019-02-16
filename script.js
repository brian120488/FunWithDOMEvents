//Challenge Zero
let button = document.getElementById("play-button");
button.addEventListener("click", ifButtonPressed);

function ifButtonPressed() {
	button.style.top = Math.random() * 100 + "%";
	button.style.left = Math.random() * 100 + "%";
}


//Challenge One
let text = document.getElementById("challenge-one");
text.addEventListener("dblclick", ifClicked);

function ifClicked() {
	let body = document.getElementsByTagName("body")[0];
	body.removeChild(text);
}
//Challenge Two
button.addEventListener("mouseover", hover);

function hover() {
	button.style.backgroundColor = "blue";
}

//Challenge Three
let title = document.getElementById("page-title");
title.addEventListener("copy", ifCopied);

function ifCopied() {
	alert("DON'T COPY THIS");
}

//Challenge Four
let body = document.getElementsByTagName("body")[0];
body.addEventListener("contextmenu", ifRightClicked);

function ifRightClicked() {
	body.style.backgroundImage = "url('images/pokemonBG2.png')";
}


