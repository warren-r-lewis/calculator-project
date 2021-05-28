var sinon = require("sinon");
var rewire = require("rewire");
const { expect } = require("chai");

let Calculator = rewire("../calculator/calculator.js").__get__("unit_test");

describe("Calculator Test Suite", () => {
    describe("Test Addition logic", function () {
        it("Add operator passed in, calls the add method on operate.", function () {
            //Arrange
            var calc = new Calculator(1, 1, "add");
            var mock = sinon.mock(calc);
            var expectation = mock.expects("add");
            expectation.exactly(1);

            //Invoke
            calc.operate();

            //Assert
            mock.verify();
        });

        it("Value equals the sum of two inputs", function () {
            //Arrange
            var calc = new Calculator(1, 1, "add");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.value).to.be.equal(2);
        });

        it("Returns Appropriate Action String", function () {
            //Arrange
            var calc = new Calculator(1, 1, "add");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.getAction()).to.be.equal("adding");
        });
    });

    describe("Test Subtraction logic", function () {
        it("Subtract operator passed in, calls the subtract method on operate.", function () {
            //Arrange
            var calc = new Calculator(1, 1, "subtract");
            var mock = sinon.mock(calc);
            var expectation = mock.expects("subtract");
            expectation.exactly(1);

            //Invoke
            calc.operate();

            //Assert
            mock.verify();
        });

        it("Value equals the difference of two inputs", function () {
            //Arrange
            var calc = new Calculator(1, 1, "subtract");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.value).to.be.equal(0);
        });

        it("Returns Appropriate Action String", function () {
            //Arrange
            var calc = new Calculator(1, 1, "subtract");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.getAction()).to.be.equal("subtracting");
        });
    });

    describe("Test Multiplaction logic", function () {
        it("Product operator passed in, calls the multiply method on operate.", function () {
            //Arrange
            var calc = new Calculator(1, 1, "multiply");
            var mock = sinon.mock(calc);
            var expectation = mock.expects("multiply");
            expectation.exactly(1);

            //Invoke
            calc.operate();

            //Assert
            mock.verify();
        });

        it("Value equals the product of two inputs", function () {
            //Arrange
            var calc = new Calculator(1, 1, "multiply");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.value).to.be.equal(1);
        });

        it("Returns Appropriate Action String", function () {
            //Arrange
            var calc = new Calculator(1, 1, "multiply");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.getAction()).to.be.equal("multiplying");
        });
    });

    describe("Test Division logic", function () {
        it("Division operator passed in, calls the multiply method on operate.", function () {
            //Arrange
            var calc = new Calculator(1, 1, "divide");
            var mock = sinon.mock(calc);
            var expectation = mock.expects("divide");
            expectation.exactly(1);

            //Invoke
            calc.operate();

            //Assert
            mock.verify();
        });

        it("Value equals the division of two inputs", function () {
            //Arrange
            var calc = new Calculator(8, 2, "divide");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.value).to.be.equal(4);
        });

        it("Returns Appropriate Action String", function () {
            //Arrange
            var calc = new Calculator(1, 1, "divide");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.getAction()).to.be.equal("dividing");
        });

        it("Raises divide by zero flag", function () {
            //Arrange
            var calc = new Calculator(1, 0, "divide");
            //Invoke
            calc.operate();

            //Assert
            expect(calc.attemptedDivideByZero).to.be.true;
        });
    });
});
