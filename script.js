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

let buttons =  document.querySelectorAll("button");
let display = document.querySelector("#display");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent = button.textContent;
})
});