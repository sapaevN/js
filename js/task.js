"use strict";

const btns = document.querySelectorAll('button')
const blockBtns = document.querySelector('.block')

// btns[0].classList.length;
// btns[0].classList.item(0);
// btns[0].classList.add("block");
	// btns[0].classList.remove('blue');
// btns[0].classList.toggle('red');




btns[0].addEventListener('click', () =>{
	// if(!btns[1].classList.contains('red') ){
	// 	btns[1].classList.add('red');
	// }else{
	// 	btns[1].classList.remove('red')
	// }

	btns[1].classList.toggle('red');

});

blockBtns.addEventListener('click', function(e){
	
	if(e.target && e.target.tagName == "BUTTON"){
		console.log("hello")
	}
});

const btn = document.createElement('button');
btn.classList.add('tomato')
blockBtns.append(btn)