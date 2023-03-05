"use strict";

const square = document.getElementById('square'),
	btns = document.getElementsByTagName('li'),
	circles = document.querySelectorAll(".circle"),
	ul = document.querySelector(".list"),
	body = document.querySelector('body');


// square.style.background = 'blue';
// square.style.width = '350px';

// for (let key of circles){
// 	key.style.background = 'tomato'; 
// }


// square.style.cssText = 'background-color: green; width: 350px; border-radius: 50%;'
const div = document.createElement('div');
// const text = document.createTextNode('i am here')
div.classList.add('black')
body.append(div)
// circles[2].before(div)
// circles[0].remove()
// if (window.screen.width)
// const windowScreen = window.screen.width;
// if(windowScreen < 678){
// 	circles[1].replaceWith(div)
// }
div.innerHTML = "<h2>Hello World</h2>";

ul.insertAdjacentHTML('afterbegin',"<header> hello i am header </header>")




console.log(ul.querySelectorAll('li'))


