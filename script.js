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
function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        default:
            return "not a valid operator";
      }
}

//DISPLAY
let buttonsSelector =  document.querySelectorAll("button");
let display = document.querySelector("#display");

buttonsSelector.forEach((button) => {
        button.addEventListener("click", () => {
            display.textContent += button.textContent;
})
});