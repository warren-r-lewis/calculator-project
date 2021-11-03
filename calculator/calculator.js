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
    getAction() {
        var action = getOperator();
        switch(action){
        case "Add":
        this.operator = "Add";
        break;
        case "Subtract":
        this.operator ="Subtract"
        break;
        case "Multiply":
        this.operator ="Multiply";
        break;
        case "Divide":
        this.operator = "Divide";
        break;
        }
    }
    
    // performa a calculation based on the currently selected operation
    operate() {
        this.getAction();
        let operate=this.operator;
        console.log(this.operator);
        switch(operate){
            case "Add":
            this.add();
            break;
            case "Subtract":
            this.subtract();
            break;
            case "Multiply":
            this.multiply();
            break;
            case "Divide":
            this.divide();
            break;
        }
    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {
     this.value = this.firstNumber + this.secondNumber
     console.log(this.value)
    }

    // perform subtraction operation
    subtract() {  this.value = this.firstNumber - this.secondNumber}

    // perform multiplication operation
    multiply() { this.value = this.firstNumber * this.secondNumber}

    // perform divide operation
    divide() { this.value = this.firstNumber / this.secondNumber}
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
