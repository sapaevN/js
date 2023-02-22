"use strict";
let num = 15;

function calcCube(meaning){

	if((typeof(meaning) != 'number' ) || (Number.isInteger(meaning) != true)){
		return console.log('When calculating, an error occurred')
	}else{
		
		let volume = `Объём куба ${meaning * meaning * meaning},`;
		let square = `Площадь всей поверхности ${(meaning*meaning)*6}`
		let result = `${volume} ${square}`;
		return result;
	}
}

console.log(calcCube(num));

let numPlace = 36;
function calcTrain(place){
	if(place < 1 || place > 36 ){
		return console.log('В этом вагоне нет таких мест');
	}else if(typeof(place) != 'number' || !Number.isInteger(place)){
		return console.log("Возникла ошибка") ;
	}else{
		return console.log(`ваше купэ по номеру ${Math.round(place/4)}`); 
	}
}
calcTrain(numPlace);
