"use strict";

// const obj ={
// 	a: 5,
// 	b: 10
// }
// console.log(obj)


// let newObj = Object.assign({},obj )
// newObj.a = 79;
// console.log(newObj)

// Object.assign(obj, newObj)

// console.log(globalObj)




// function createObj(mainObj){
// 	let objCopy = {};
// 	for (let key in mainObj){
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy
// }

// const newObj = createObj(obj);
// newObj.a = 35;
// console.log(newObj)





// const num ={
// 	experence: 10,
// 	age: 35
// }
// const str ={
// 	name: "Alex",
// 	password:" 123123123asdsadasd"
// }

// const userInfo = Object.assign(str,num) 
// console.log(userInfo)

const oldArray = ["helllo", 213123,  "okiwpeofkw"];
const newArr = [...oldArray]
newArr.unshift("sdfdsfffffffffffffff") 
console.log(oldArray)
console.log(newArr)
