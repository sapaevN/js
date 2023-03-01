"use strict";

// const someString = "heloooooooooooooo woooorld";

// function reverse(str){
// 	let result = '' 
// 	if(typeof(str) != 'string'){
// 		return console.log( "Ошибка!")
// 	}else{
// 		for(let i = 0; i < str.length; i++){
// 			result += str[str.length - 1 - i ]	
// 		}
// 		return console.log(result);	
// 	}
	
// }
// reverse(someString)
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	let result = "Доступные валюты\n";
	if(arr.length === 0){
		return console.log("Нет доступных валют.")
	}
	arr.forEach(function(item){
		if(item !== missingCurr){
			result += `${item}\n`;
		};
	});
	return console.log(result);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "UAH")