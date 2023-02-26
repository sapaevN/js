"use strict";
let a;
rememberFilms()


function rememberFilms(){
	let a = prompt("последний просмотренный фильм", "").trim()
	const moviesDB = {
		lastFilms: a
	};
	console.log(moviesDB);
}

