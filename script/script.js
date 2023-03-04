"use strict";

const box = document.getElementById('square');
console.log(box);

const  btns = document.getElementsByTagName('li');

for( let key of btns ){
	console.log(key)
}


const circles = document.querySelectorAll(".circle");

circles.forEach((item) => {
	console.log(item)
});

const circle = document.querySelector("div");
console.log(circle)