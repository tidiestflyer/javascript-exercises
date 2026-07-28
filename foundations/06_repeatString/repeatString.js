let input = "";
let output = "";
let count = 0;

const repeatString = function(input, count) {
output = ""
if (count < 0) {
    return "ERROR";
} else {
    for (i = 0; i < count; i++) {
    output = output + input;
    }
    return output;
    }
}

// Do not edit below this line
module.exports = repeatString;
