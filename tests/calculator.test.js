let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Помилка";
    }
}

module.exports = {
    appendToDisplay,
    clearDisplay,
    calculateResult
};

// calculator.tests.js
const { appendToDisplay, clearDisplay, calculateResult } = require('./calculator.test');

describe('Calculator Functions', () => {
    let display;

    beforeEach(() => {
        display = { value: '' };
    });

    test('should append a value to the display', () => {
        appendToDisplay('5');
        expect(display.value).toBe('5');
    });

    test('should clear the display', () => {
        display.value = '123';
        clearDisplay();
        expect(display.value).toBe('');
    });

    test('should calculate the result', () => {
        display.value = '2 + 3';
        calculateResult();
        expect(display.value).toBe('5');
    });

    test('should handle errors', () => {
        display.value = '2 / 0';
        calculateResult();
        expect(display.value).toBe('Помилка');
    });
});
