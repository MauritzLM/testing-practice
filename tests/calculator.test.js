const math = require('../scripts/calculator.js');


test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('substract 2 - 1 to equal 1', () => {
    expect(math.subtract(2, 1)).toBe(1);
});

test('multiply 1 * 2 to equal 2', () => {
    expect(math.multiply(1, 2)).toBe(2);
});

test('divide 2 / 1 to equal 2', () => {
    expect(math.divide(2, 1)).toBe(2);
});