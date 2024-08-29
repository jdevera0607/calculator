
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");

const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');

const operations = document.querySelectorAll('.operation');
const previousOperand = document.querySelector('.previousOperand');
const currentOperand = document.querySelector('.currentOperand');

const calculate = document.querySelector('.equals');
 
currentOperand.textContent = '';
previousOperand.textContent = '';

numbers.forEach((number) => {
    number.addEventListener('click', () => {
        numInput = number.textContent;
        // currentOperand.textContent += numInput;
        getInput(numInput);

    });
});

function getInput(){
    currentOperand.textContent += numInput;
}

clearButton.addEventListener('click', () => {
    currentOperand.textContent = '';
});

operations.forEach((operation) => {
    operation.addEventListener('click', () => {
       operationInput = operation.textContent;
        getOperation(operationInput);
    });
});

function getOperation(){
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = '';
    operations.textContent = operationInput;
  

}
calculate.addEventListener('click', calculation);


function calculation(){
const x = parseFloat(previousOperand.textContent);
const y = parseFloat(currentOperand.textContent);
console.log(x + y)
// y = currentOperand.textContent;
// chosenOperation = operations.textContent;


// op = operationButtons;
// console.log(op);
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


