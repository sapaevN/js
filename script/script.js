"use strict";
//числа фибоначчи 
let num  = 20;

function fib(fibNum){
	let result = '';
	if(typeof(fibNum) != 'number'){
		return console.log(result) ;
	}
	let arr = [0,1];
	result = `${arr[0]} ${arr[1]} `
	for(let i = 2; i<fibNum; i++){
		arr[i] = arr[i-1] + arr[i-2];
		result = result + `${arr[i] = arr[i-1] + arr[i-2]} `;
	}
	return console.log(result);
}

fib(num);
