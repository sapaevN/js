"use strict";


function counter() {
	let count = 0;
	return function () {
		count++;
		return count
	}
}

const value = counter();
console.log(value())
console.log(value())
console.log(value())
console.log(value())
console.log(value())
console.log(value())



