const palindromes = function (phrase) {
    const allowedChar = "abcdefghijklmnopqrstuvwxyz1234567890";
    
    splitArray = phrase.toLowerCase().split("");
    splitArray = splitArray.filter((char) => allowedChar.includes(char));
    forwardPhrase = splitArray.join("");
    backwardPhrase = splitArray.reverse().join("");

    if(forwardPhrase == backwardPhrase) return true; return false;
};

// Do not edit below this line
module.exports = palindromes;
