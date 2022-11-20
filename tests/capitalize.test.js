const { default: test } = require("node:test")

test('capitalize string', () => {
    expect(capitalize(hello).toBe(Hello));
})
