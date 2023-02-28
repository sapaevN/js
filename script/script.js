"use strict"
const family = ['Peter', 'Ann', 'Alex', 'Linda']

function showFamily(f){
	let resultStr = '';
	if(f.length == 0){
		return console.log("Семья пуста");
	}
	else{
		f.forEach(function(e, n, link){
			resultStr += `${e} `;
		});
	}
	return console.log(resultStr);
}
showFamily(family);
const itemcities = ['LisBon', 'ROME', 'milan', 'DubLin'];

function standardizStr(cities){
	let showCities = '';
	cities.forEach(function(k){
		showCities += `${k} \n`;
	});
	return  console.log(showCities.toLowerCase());
}

standardizStr(itemcities);