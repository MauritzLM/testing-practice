const capitalize = require("../scripts/capitalize.js")

test('capitalize string', () => {
    expect(capitalize('hellO')).toBe('Hello');
});
