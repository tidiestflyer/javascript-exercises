const palindromes = function () {
    let forward = arguments[0].toLowerCase();
    let backward = "";
    let characterToCheck = "";

    //remove these characters
    forward = forward.replaceAll(",", "");
    forward = forward.replaceAll(".", "");
    forward = forward.replaceAll("!", "");
    forward = forward.replaceAll("?", "");
    forward = forward.replaceAll(" ", "");

    for (i = forward.length; i > 0; i--) {
        characterToCheck = forward.substr(i - 1, 1);
        backward = backward + characterToCheck;
        console.log(backward);
    }

    console.log(`Loop is completed. Now does "${forward}" equal "${backward}" ?`);
    if (forward == backward) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
