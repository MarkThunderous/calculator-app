const { appendToDisplay, clearDisplay, calculateResult } = require('./calculator');

test('should append a value to the display', () => {
    let display = { value: '' };
    appendToDisplay('5', display);
    expect(display.value).toBe('5');
});

test('should clear the display', () => {
    let display = { value: '123' };
    clearDisplay(display);
    expect(display.value).toBe('');
});

test('should calculate the result', () => {
    let display = { value: '2 + 3' };
    calculateResult(display);
    expect(display.value).toBe('5');
});

test('should handle errors', () => {
    let display = { value: '2 / 0' };
    calculateResult(display);
    expect(display.value).toBe('Помилка');
});
