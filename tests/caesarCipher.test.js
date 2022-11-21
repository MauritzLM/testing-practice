const shift = require("../scripts/caesarCipher.js");

test('test shift string', () => {
    expect(shift('a', 3)).toBe('d');
});

test('test keeping same case', () => {
    expect(shift('aB', 2)).toBe('cD');
});

test('test wrapping', () => {
    expect(shift('z', 3)).toBe('c');
});

test('test punctuation', () => {
    expect(shift('a.b c?', 25)).toBe('z.a b?');
})