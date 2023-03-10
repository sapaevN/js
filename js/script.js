"use strict";


// const p = document.querySelectorAll('p');
// console.log(p)

function scriptLoaded(src){
   const script = document.createElement('script')
   script.src = src;
   script.async = false;
   document.body.append(script);
}

scriptLoaded("js/task.js")
scriptLoaded("js/some.js")