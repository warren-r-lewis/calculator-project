describe("Rock Paper Scissors", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/index.html");
    });

    it("Should have an external CSS file", () => {
        cy.get("link").invoke("attr", "href").should("eq", "calculator.css");
    });

    describe("number inputs", () => {
        it("should have number input for first number", () => {
            let element = cy.get("#inputNumberOne");
            element.invoke("attr", "type").should("eq", "number");
        });

        it("first input should autofocus", () => {
            cy.get("#inputNumberOne").should("have.attr", "autofocus");
        });

        it("should have number input for second number", () => {
            let element = cy.get("#inputNumberTwo");
            element.invoke("attr", "type").should("eq", "number");
        });
    });

    describe("radio buttons", () => {
        it("should have all operators", () => {
            cy.get(".operators").within(() => {
                cy.get("input#add")
                    .invoke("attr", "type")
                    .should("eq", "radio");
                cy.get("input#subtract")
                    .invoke("attr", "type")
                    .should("eq", "radio");
                cy.get("input#multiply")
                    .invoke("attr", "type")
                    .should("eq", "radio");
                cy.get("input#divide")
                    .invoke("attr", "type")
                    .should("eq", "radio");
            });
        });
    });

    describe("operator buttons", () => {
        const typeNumbers = (firstNumber, secondNumber) => {
            cy.get("#inputNumberOne").type(`${firstNumber}`);
            cy.get("#inputNumberTwo").type(`${secondNumber}`);
        };
        const first = 2;
        const second = 3;
        const sum = first + second;

        it("equal button should have operate class", () => {
            cy.get(".buttons")
                .children("button")
                .first()
                .should("have.class", "operate");
        });

        it("equal button should set results text", () => {
            typeNumbers(first, second);
            cy.get("#add").check();
            cy.get(".buttons").children("button").first().click();
            cy.get("#result").contains(`${sum}`);
        });

        it("clear button should have clear class", () => {
            cy.get(".buttons")
                .children("button")
                .last()
                .should("have.class", "clear");
        });

        it("clear button should reset inputs", () => {
            typeNumbers(first, second);
            cy.get(".buttons").children("button").last().click();
            cy.get("input[type=number]").should("have.value", "");
        });

        it("dividing by zero displays warning message", () => {
            typeNumbers(first, 0);
            cy.get("#divide").check();
            cy.get(".buttons").children("button").first().click();
            cy.get("#result").contains("divide by zero");
        });
    });
});
