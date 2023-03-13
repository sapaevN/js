"use strict";

// function logger() {
//    i++
//    if (i == 3) {
//       clearInterval(timeId)
//    }
//    console.log("hello")


// }
// let i = 0;
// let timeId;
// const btn = document.querySelector('.qvadrant');

// const id = setTimeout(function log() {
//    console.log('hello')
//    id = setTimeout(log,500)
// },500)



let btn = document.querySelector("button")
let target = document.querySelector(".qvadrant")




function myAnimation() {

   let pos = 0;

   let id = setInterval(function () {

      if (pos == 392) {
         clearTimeout(id)
      } else {
        
         pos++;
         target.style.top = pos + "px";
         target.style.left = pos + "px";
      }
   }, 0)
}

btn.addEventListener("click", myAnimation)
