"use strict";
document.addEventListener('DOMContentLoaded', () =>{

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const output = document.querySelector("#output");
const division = document.querySelector('#division');
const multipl = document.querySelector('#multipl');

function resultOutput(result){
   output.innerHTML = `Результат = ${result}`;
}

function getInputsValues() {
   const value1 = +(num1.value);
   const value2 = +(num2.value);
   return [value1, value2];
}

function addHandler() {
   const values = getInputsValues();
   const result = values[0] + values[1];
   resultOutput(result);
}

function subHandler() {
   const values = getInputsValues();
   const result = values[0] - values[1];
   resultOutput(result);
}
function multiplHandler(){
   const values = getInputsValues();
   const result = values[0]*values[1];
   resultOutput(result)
}
function divisionHandler(){
   const values = getInputsValues();
   const result = values[0]/values[1];
   resultOutput(result)
}

addBtn.addEventListener('click', addHandler);
subBtn.addEventListener('click', subHandler);
multipl.addEventListener('click',multiplHandler);
division.addEventListener('click',divisionHandler);

});