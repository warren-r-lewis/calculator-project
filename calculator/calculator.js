class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {}

    // performa a calculation based on the currently selected operation
    operate() {}

    attemptedDivideByZero = false;

    // perform addition operation
    add() {}

    // perform subtraction operation
    subtract() {}

    // perform multiplication operation
    multiply() {}

    // perform divide operation
    divide() {}
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
