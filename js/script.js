/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Решение заданий 
const advertisement = document.querySelector(".promo__adv")
advertisement.remove(); // First task 

// second task
const promoBg = document.querySelector(".promo__bg")
const genreDrama = document.createElement("div");
genreDrama.textContent = 'Драма'
genreDrama.style = 'color: white; font-size:30px; font-weight:500;'
promoBg.querySelector(".promo__genre").replaceWith(genreDrama)

//Thirth task
console.dir(promoBg);
promoBg.style = 'background:url(../img/bg.jpg) center / contain;'

// 4
const movieList = document.querySelector('.promo__interactive-list')
movieList.innerHTML = ''

movieDB.movies.sort()

movieDB.movies.forEach((film, i) =>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1}  ${film} 
        <div class="delete"></div>
    </li>
    `;
});
