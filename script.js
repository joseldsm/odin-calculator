//CREATING CALCULATOR
const buttonsObjects = [
    {value: "0", type: "number", position: 14},
    {value: "1", type: "number", position: 9},
    {value: "2", type: "number", position: 10},
    {value: "3", type: "number", position: 11},
    {value: "4", type: "number", position: 5},
    {value: "5", type: "number", position: 6},
    {value: "6", type: "number", position: 7},
    {value: "7", type: "number", position: 1},
    {value: "8", type: "number", position: 2},
    {value: "9", type: "number", position: 3},
    {value: "+", type: "operator", position: 16},
    {value: "-", type: "operator", position: 12},
    {value: "\u00D7", type: "operator", position: 8},
    {value: "%", type: "operator", position: 4},
    {value: "=", type: "result", position: 18},
    {value: ".", type: "dot", position: 15},
    {value: "AC", type: "clear", position: 13},
    {value: "<==", type: "backspace", position: 17},
]

buttonsObjects
    .sort((a, b) => a.position - b.position)
    .forEach((item) => {
        const buttons = document.querySelector("#buttons");
        const button = document.createElement("button");
        button.textContent = item.value;
        buttons.appendChild(button);
});

//OPERATORS CALCULATION
function operate(operator, a, b) {   
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "\u00D7":
            return a * b;
        case "%":
            if (b !== 0) {
                return a / b;
            } else {
                return "MATH ERROR"};
      }
}

//DISPLAY AND CALCULATION ARRAY INIT
let display = document.querySelector("#display");
display.textContent = "0";

let dotDetector = false;
let number1 = "0";
let operator = number2 = "";

//CLICK BUTTONS
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonClicked = buttonsObjects.find((object) => object.value === button.textContent);

        switch (buttonClicked.type) {
            case "dot":
                if (dotDetector === false && operator === "") {
                    number1 += buttonClicked.value;
                    display.textContent = number1 ;
                    dotDetector = true;
                } else if (dotDetector === false && operator !== "") {
                    number2 += buttonClicked.value;
                    display.textContent = number2 ;
                    dotDetector = true;
                }
                break;
            case "number":
                if (operator === "") {
                    if (number1 === "0" || number1 === "MATH ERROR") {
                        display.textContent = "";
                        number1 = "";
                    }
                    number1 += buttonClicked.value;
                    display.textContent = number1;
                } else if (number1 !== "" && operator !== "") {
                    number2 += buttonClicked.value;
                    display.textContent = number2;
                }
                break;
            case "operator":
                if (operator === "" && number1 !== "MATH ERROR") {
                    operator = display.textContent = buttonClicked.value;
                    dotDetector = false;
                }
                break;
            case "result":
                if (number1 !== "" && number2 !== "" && operator !== "") {
                    number1 = String(operate(operator, Number(number1), Number(number2)));
                    display.textContent = number1;
                } else if (number1 !== "" && number2 === "" && operator === "") {
                    display.textContent = number1;
                }
                operator = number2 = "";
                break;
            case "clear":
                display.textContent = number1 = "0";
                operator = number2 = "";
                break;
            case "backspace":
                if (operator === "" && number1.length > 1) {
                    display.textContent = number1 = number1.slice(0, -1);
                } else if (number2 !== "") {
                    display.textContent = number2 = number2.slice(0, -1);
                } else if (number1.length === 1) {
                    display.textContent = number1 = "0";
                }
                break;
        }
    })
});