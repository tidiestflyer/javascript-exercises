
const removeFromArray = function(arr) {
    inputArray = arr;
    for(i = 1; i < arguments.length; i++) {
        inputArray = inputArray.filter((num) => num !== arguments[i]);
    }
    return inputArray;
}

// Do not edit below this line
module.exports = removeFromArray;
