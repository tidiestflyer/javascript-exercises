const repeatString = function(input, count) {
    if (count < 0) return "ERROR";

    builtString = "";
    for(i = 0; i < count; i++) {
        builtString +=input;
    }
    return builtString;
}

// Do not edit below this line
module.exports = repeatString;
