// setup variables and get a calculator instance
function CreateCalculator(
) {
    let calculator = new Calculator;
    calculator.firstNumber = parseFloat(document.getElementById("fNumber").value);
    calculator.secondNumber= parseFloat(document.getElementById("sNumber").value);
    console.log(calculator.firstNumber);
    return calculator;
    

}

// perform a calculation when the operator button is clicked
function calculate() {
    var calculator = CreateCalculator();
    calculator.operator=getOperator()
    calculator.operate();
    updateResultText(calculator.value); 
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
    document.getElementById("output").innerHTML = "The Result is: " + value;
}

// should clear input text values and focus the first number input
function clearValues() {
    document.getElementById("inputForm").reset();
    document.getElementById("radioForm").reset();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
    var operators = document.querySelector("input[name = 'mathOperation']:checked").value;
    return operators;
}
