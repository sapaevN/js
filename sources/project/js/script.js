"use strict";

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			'логан',
			'ла ла ленд ',
			'лига спроведливости',
			'скотт пилигрим против ...',
			'одержимость',
		]
	}

	
	const movieList = document.querySelector('.promo__interactive-list')
	// const addFilmBtn = document.querySelector('button');
	const addForm = document.querySelector('form.add');
	const addInput = addForm.querySelector(".adding__input");
	const checkbox = addForm.querySelector('[type="checkbox"]')

	function removeReclam() {
		document.querySelector('.promo__adv').remove()
	}
	function changeGenre() {
		document.querySelector('.promo__genre').innerHTML = 'драма'
	}
	function changeBg() {
		document.querySelector(".promo__bg").style = `background: url('../img/bg.jpg') center top / cover  `;
	}
	function sortArr(arr){
		arr.sort();
	}
	addForm.addEventListener('submit',(event) =>{
		event.preventDefault();
		const newFilm = addInput.value;
		const favorite = checkbox.checked;
		movieDB.movies.push(newFilm);
		sortArr(movieDB.movies)
		console.log(movieDB.movies)
	});


	function pushElemInCollectionFilms(films, parent){
		parent.innerHTML = ''
		for(let i = 0; i < films.length; i++){
			parent.innerHTML +=`<li class="promo__interactive-item">
			${i+1}	 ${films[i]}
			<div class="delete"></div>
	  		</li>`
		}
		console.log(parent)
		console.log(films)
	}	
	
	sortArr(movieDB.movies)


	pushElemInCollectionFilms(movieDB.movies, movieList  )
	changeBg()
	changeGenre()
	removeReclam()
});