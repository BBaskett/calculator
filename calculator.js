// Global Variables
var currentInput = document.querySelector('input#current');
var previousInput = document.querySelector('input#previous');
var numberButtons = document.querySelectorAll('button.number');
var stateButtons = document.querySelectorAll('button.state');
var operatorButtons = document.querySelectorAll('button.operator');
var clearButton = document.querySelector('button#clear');
var decimalButton = document.querySelector('button#decimal');
var selectedButton = document.querySelector('button.selected');
// Event Listeners
decimalButton.addEventListener('click', function () {
    if (!currentInput.value.includes('.')) {
        currentInput.value += '.';
    }
});
numberButtons.forEach(function (numberButton) {
    numberButton.addEventListener('click', function () {
        (currentInput.value === '0') ? currentInput.value = this.textContent : currentInput.value += this.textContent;
        if (currentInput.value === '0') {
            clearButton.textContent = 'AC';
        }
        else {
            clearButton.textContent = 'C';
        }
    });
});
stateButtons.forEach(function (stateButton) {
    stateButton.addEventListener('click', function () {
        switch (this.textContent) {
            case 'AC':
                previousInput.value = currentInput.value = '0';
            case 'C':
                clearButton.textContent = 'AC';
                currentInput.value = '0';
                break;
            case '+/-':
                currentInput.value = (Number(currentInput.value) * -1).toString();
                break;
            case '%':
                currentInput.value = (Number(currentInput.value) / 100).toString();
                break;
        }
    });
});
operatorButtons.forEach(function (operatorButton) {
    operatorButton.addEventListener('click', function () {
        var calculator = new Calculator(currentInput.value, previousInput.value);
        if (selectedButton) {
            selectedButton.classList.toggle('selected');
        }
        switch (this.textContent) {
            case '/':
            case 'x':
            case '+':
            case '-':
                this.classList.toggle('selected');
            case '/':
                calculator.divide();
                break;
            case 'x':
                calculator.multiply();
                break;
            case '+':
                calculator.add();
                break;
            case '-':
                calculator.subtract();
                break;
            case '=':
                if (selectedButton) {
                    switch (selectedButton.value) {
                        case '/':
                            calculator.divide();
                            break;
                        case 'x':
                            calculator.multiply();
                            break;
                        case '+':
                            calculator.add();
                            break;
                        case '-':
                            calculator.subtract();
                            break;
                    }
                }
                else {
                    console.log('idk yet');
                }
                break;
        }
    });
});
var Calculator = /** @class */ (function () {
    function Calculator(current, previous) {
        this.current = current;
        this.previous = previous;
    }
    Calculator.prototype.add = function () {
        previousInput.value = (Number(this.previous) + Number(this.current)).toString();
        /*if (previousInput.value === '0') {
            previousInput.value = this.current;
        } else {
            previousInput.value = (Number(this.previous) + Number(this.current)).toString()
        }*/
        currentInput.value = '0';
    };
    Calculator.prototype.subtract = function () {
        if (previousInput.value === '0') {
            previousInput.value = this.current;
        }
        else {
            previousInput.value = (Number(this.previous) - Number(this.current)).toString();
        }
        currentInput.value = '0';
    };
    Calculator.prototype.multiply = function () {
        if (previousInput.value === '0') {
            previousInput.value = this.current;
        }
        else {
            previousInput.value = (Number(this.previous) * Number(this.current)).toString();
        }
        currentInput.value = '0';
    };
    Calculator.prototype.divide = function () {
        console.log('divide');
    };
    return Calculator;
}());
//# sourceMappingURL=calculator.js.map