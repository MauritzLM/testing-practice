function analyzeArray(array) {

    return {
        average: getAverage(array),
        min: array.reduce(getMin),
        max: array.reduce(getMax),
        length: array.length
    }
}

const getMax = (a, b) => {
    return Math.max(a, b)
}

const getMin = (a, b) => {
    return Math.min(a, b)
}

const getAverage = (array) => {
    let sum = array.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0);

    let average = sum / array.length;

    return average;
}

module.exports = analyzeArray;