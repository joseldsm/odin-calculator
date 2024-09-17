//CREATING CALCULATOR
const buttonsArray = [
    {text: 0, class: "number", position: 14},
    {text: 1, class: "number", position: 9},
    {text: 2, class: "number", position: 10},
    {text: 3, class: "number", position: 11},
    {text: 4, class: "number", position: 5},
    {text: 5, class: "number", position: 6},
    {text: 6, class: "number", position: 7},
    {text: 7, class: "number", position: 1},
    {text: 8, class: "number", position: 2},
    {text: 9, class: "number", position: 3},
    {text: "+", class: "operator", position: 16},
    {text: "-", class: "operator", position: 12},
    {text: "\u00D7", class: "operator", position: 8},
    {text: "%", class: "operator", position: 4},
    {text: "=", class: "result", position: 15},
    {text: "AC", class: "clear", position: 13},
]

buttonsArray.sort((a, b) => a.position - b.position)
            .forEach((item) => {
    const buttons = document.querySelector("#buttons");
    const button = document.createElement("button");
    button.className = item.class;
    button.textContent = item.text;
    buttons.appendChild(button);
});

//OPERATORS CALCULATION
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "\u00D7":
            return a * b;
        case "%":
            return a / b;
        default:
            return "not a valid operator";
      }
}

let buttonsNumber =  document.querySelectorAll(".number");
let buttonsOperator = document.querySelectorAll(".operator");
let buttonResult = document.querySelector(".result");
let buttonClear = document.querySelector(".clear");
let display = document.querySelector("#display");
let calculation = [];

//CLICK NUMBERS
buttonsNumber.forEach((button) => {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
            calculation.push(Number(button.textContent));
})
});

//CLICK OPERATORS
buttonsOperator.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
        calculation.push(button.textContent);
})
});

//CLICK =
buttonResult.addEventListener("click", () => {
    console.table(calculation);
    let calculationCleaned = cleaningCalc(calculation);
    console.table(calculationCleaned);
    let result =  operate(calculationCleaned[1], calculationCleaned[0], calculationCleaned[2]);
    display.textContent = result;
    calculation = [result];
})

//CLICK AC
buttonClear.addEventListener("click", () => {
    display.textContent = "";
    calculation = [];
})

//CLEAN ARRAY : GATHER NUMBERS, CHECK IF FORMAT IS OK.
function cleaningCalc(array) {
    let operatorDetector = 0;
    let numberDetector = 0;
    let cleanedArray = ["","",""];

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === 'number' && operatorDetector === 0) {
            cleanedArray[0] += String(array[i]);
            numberDetector = 1;
        } else if (typeof(array[i]) !== 'number' && numberDetector === 1) {
            cleanedArray[1] = (array[i]);
            operatorDetector++;
        } else if (typeof(array[i]) === 'number' && operatorDetector === 1) {
            cleanedArray[2] += String(array[i]);
        } else {
            alert("error");
            break;
        }
    }
    return cleanedArray;
}