"use strict";

// let num = 111;
// function getTimeFromMinutes(minutes){
// 	if(minutes < 0 || typeof(minutes) != 'number'){
// 		return console.log('Ошибка, проверьте данные');
// 	}
// 		let result = '';
// 		let calc = minutes / 60;
// 		calc = parseInt(calc);
// 		let remainder = minutes % 60;
// 		if(calc === 1){
// 			result = `это ${calc} час и ${remainder} минут`
// 			return console.log(result);
// 		}else if(calc > 1 && calc < 5 ){
// 			result = `это ${calc} часa и ${remainder} минут`
// 			return console.log(result);
// 		}
// 		else{
// 			result = `это ${calc} часов и ${remainder} минут`
// 			return console.log(result);
// 		}
// }
// getTimeFromMinutes(num);
	
		let first = 90,
			 second = 40,
			 third = 41,
			 last = 4;
	

function findMaxNumber(a,b,c,d){
	const arr = [a,b,c,d];
	let max = arr[0];
	for(let i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i]
		}
	}
	return console.log(max);
}
findMaxNumber(first,second, third,last);
