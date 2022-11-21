function shift(string, amount) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        // get charcode of sting[i];
        let num = string[i].charCodeAt(0);
        let newNum = num + amount;

        // uppercase
        if (num >= 65 && num <= 90) {
            if (newNum < 65) {
                newStr += String.fromCharCode(newNum + 26);
            }

            else if (newNum > 90) {
                newStr += String.fromCharCode(newNum - 26);
            }
            else {
                newStr += String.fromCharCode(newNum);
            }
        }

        // lower case
        else if (num >= 97 && num <= 122) {
            if (newNum < 97) {
                newStr += String.fromCharCode(newNum + 26);
            }
            else if (newNum > 122) {
                newStr += String.fromCharCode(newNum - 26);
            }
            else {
                newStr += String.fromCharCode(newNum);
            }
        }
        // keep punctuation
        else {
            newStr += string[i];
        }

    }

    return newStr;
}

module.exports = shift;