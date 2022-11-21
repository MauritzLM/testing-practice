const analyzeArray = require('../scripts/analyzeArray.js');

test('test object values', () => {
    expect(analyzeArray([1, 2])).toEqual({ average: 1.5, min: 1, max: 2, length: 2 });
});
