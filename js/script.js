"use strict";
const wrapper = document.querySelector('.wrapper')
const btn = document.querySelector('button')
const menu = document.createElement("nav");
menu.classList.add("menu")
menu.style = "width: 100px; height: 50px; background-color:tomato; margin-top: 30px;"
document.querySelector('button').after(menu)
// btn.onclick = function(){
//     console.log('Click')
// };
let i = 0;
const menuOpen = function(e){
    
   menu.classList.toggle('_active')
   i++;
   if(i == 100){
      btn.removeEventListener('click', menuOpen);
   }
}

btn.addEventListener('click', menuOpen);  
