const caesarCipher = require("../scripts/caesarCipher.js");

test('test shift string', () => {
    expect(caesarCipher('a', 3)).toBe('d');
});

test('test keeping same case', () => {
    expect(caesarCipher('aB', 2)).toBe('cD');
});

test('test wrapping', () => {
    expect(caesarCipher('z', 3)).toBe('c');
});

test('test punctuation', () => {
    expect(caesarCipher('a.b c?', 25)).toBe('z.a b?');
});