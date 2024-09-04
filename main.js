
const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");

const numbers = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');

const operations = document.querySelectorAll('.operation');
const previousOperand = document.querySelector('.previousOperand');
const currentOperand = document.querySelector('.currentOperand');

const calculate = document.querySelector('.equals');
 
currentOperand.textContent.placeholder = '0';
previousOperand.textContent.placeholder = '0';

numbers.forEach((number) => {                               //For each number button that is pressed, the text content is stored
    number.addEventListener('click', () => {                //and calls getInput function and passes the input stored as an argument
        numInput = number.textContent;                      
        getInput(numInput);

    });
});

function getInput(){
    currentOperand.textContent += numInput;                 //Stores the input number as text content
}

clearButton.addEventListener('click', () => {               //Clears input numbers
    currentOperand.textContent.placeholder = '0';
});

operations.forEach((operation) => {                         //Stores operation 
    operation.addEventListener('click', () => {
        operations.disabled = true;
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
let x = parseFloat(previousOperand.textContent)
let y = parseFloat(currentOperand.textContent)
const z = operations.textContent;
    if(!currentOperand.textContent || !previousOperand.textContent || !operations.textContent){
        alert("Please pick an operand or operator!");
    }

    if(operations.textContent == "+"){
        currentOperand.textContent = x + y;
        previousOperand.textContent = x;
    }
    if(operations.textContent == "x"){
        currentOperand.textContent = (x * y);
        previousOperand.textContent = x;
    }
    if(operations.textContent == "/"){
        currentOperand.textContent = parseFloat(x)/parseFloat(y);
        previousOperand.textContent = x;
    }
    if(operations.textContent == '-'){
        let result = x - y;
        currentOperand.textContent = result;
        previousOperand.textContent = x;
    }
}
