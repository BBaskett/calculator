// Global Variables
var currentInput = document.querySelector('input#current');
var previousInput = document.querySelector('input#previous');
var numberButtons = document.querySelectorAll('button.number');
var stateButtons = document.querySelectorAll('button.state');
var operatorButtons = document.querySelectorAll('button.operator');
var clearButton = document.querySelector('button#clear');
var decimalButton = document.querySelector('button#decimal');
var equalButton = document.querySelector('button#equal');
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
        var selectedButton = document.querySelector('button.selected');
        switch (this.textContent) {
            case 'AC':
                selectedButton.classList.toggle('selected');
                previousInput.value = currentInput.value = '0';
                break;
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
        var selectedButton = document.querySelector('button.selected');
        if (selectedButton) {
            selectedButton.classList.toggle('selected');
        }
        if (!selectedButton && previousInput.value !== '0') {
            previousInput.value = '0';
        }
        this.classList.toggle('selected');
        switch (this.textContent) {
            case '/':
                divide();
                break;
            case 'x':
                multiply();
                break;
            case '+':
                add();
                break;
            case '-':
                subtract();
                break;
        }
    });
});
equalButton.addEventListener('click', function () {
    var selectedButton = document.querySelector('button.selected');
    switch (selectedButton.textContent) {
        case '/':
            divide();
            break;
        case 'x':
            multiply();
            break;
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
    }
    selectedButton.classList.toggle('selected');
});
function add() {
    if (previousInput.value === '0') {
        previousInput.value = currentInput.value;
    }
    else if (currentInput.value === '0') {
        return;
    }
    else {
        previousInput.value = (Number(previousInput.value) + Number(currentInput.value)).toString();
    }
    currentInput.value = '0';
}
function subtract() {
    if (previousInput.value === '0') {
        previousInput.value = currentInput.value;
    }
    else if (currentInput.value === '0') {
        return;
    }
    else {
        previousInput.value = (Number(previousInput.value) - Number(currentInput.value)).toString();
    }
    currentInput.value = '0';
}
function multiply() {
    if (previousInput.value === '0') {
        previousInput.value = currentInput.value;
    }
    else if (currentInput.value === '0') {
        return;
    }
    else {
        previousInput.value = (Number(previousInput.value) * Number(currentInput.value)).toString();
    }
    currentInput.value = '0';
}
function divide() {
    if (previousInput.value === '0') {
        previousInput.value = currentInput.value;
    }
    else if (currentInput.value === '0') {
        return;
    }
    else {
        previousInput.value = (Number(previousInput.value) / Number(currentInput.value)).toString();
    }
    currentInput.value = '0';
}
//# sourceMappingURL=calculator.js.map