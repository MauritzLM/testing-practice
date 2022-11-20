
const reverseString = require("../scripts/reverseString.js");

test('reverse string', () => {
    expect(reverseString('om si eman ym')).toBe('my name is mo');
})