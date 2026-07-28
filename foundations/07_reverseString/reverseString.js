let input = "";
let output = "";
let count = 0;

const reverseString = function(input) {
    output = "";
    for (count = input.length - 1; count >= 0; count--) {
        output = output + input[count];
    }
return output;
};

// Do not edit below this line
module.exports = reverseString;