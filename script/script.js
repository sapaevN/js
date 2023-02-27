"use strict";

function first(){
	//do something
	setTimeout(function(){
		console.log(1)
	},1500);
}

function second(){
	console.log(2);
}

first();
second();

function learnJs(lang, callback){
	console.log(`я учу ${lang}`);
	callback();
}
function done(){
	console.log('я прошёл этот урок')
}

learnJs('JS',done);