const calculator = document.getElementById("form");
const display = document.getElementById("display");



function displayTo(input){
  display.value += input; 
}

function clearDisplay(){
    display.value=('')
}
function errorCheck(){
   
}
function getInput(input){ 
  displayTo(input);
}

// const add = function( x , y) {
// 	return x + y
// };

// const subtract = function(x , y) {
// 	return x - y
// };

// const sum = function(array) {
//   let result = 0;
// 	for(let i = 0; i < array.length; i++){
//     result += array[i];
//   }
//   return result;
// };

// const multiply = function(array) {
//   let result = 1;
//   for(let i = 0; i < array.length; i++){
//     result *=array[i];
//   }
//   return result
// };

// const power = function(x , y) {
// return x ** y;
// };

// const factorial = function(n) {
//   result = 1;
// 	if (n === 0){
//     return 1;
//   }
//   while(n > 1) {
//     result *= n;
//      n--;
   
//   }
//  return result;
// };


