function caesarCipher(string, amount) {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        // get charcode of string[i]
        let charcode = string[i].charCodeAt(0);

        // convert to lowercase
        let lowerCase = string[i].toLowerCase();
        // code of lower case
        let lowerCaseCode = lowerCase.charCodeAt(0);

        // get new letter
        let newLetter = String.fromCharCode(((lowerCaseCode - 97 + amount) % 26) + 97);

        // if uppercase
        if (charcode >= 65 && charcode <= 90) {
            newStr += newLetter.toUpperCase();
        }

        // if lowercase
        else if (charcode >= 97 && charcode <= 122) {
            newStr += newLetter
        }

        // punctuation
        else {
            newStr += string[i];
        }
    }

    return newStr;
}

module.exports = caesarCipher;