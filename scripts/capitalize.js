function capitalize(string) {
    let newStr = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {
        newStr += string[i].toLowerCase();
    }

    return newStr;
}

module.exports = capitalize;