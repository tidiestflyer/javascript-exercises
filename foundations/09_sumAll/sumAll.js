const sumAll = function(min, max) {
    if(Number.isInteger(min) == false || Number.isInteger(max) == false) return "ERROR";
    else if (min < 0 || max < 0) return "ERROR";
    
    if(min > max) {
        largeValue = min;
        smallValue = max;
    } else {
        smallValue = min;
        largeValue = max;
    }

    sum = 0;
    count = largeValue - smallValue - 1;
    for(i = 0; i < count; i++) {
        sum += smallValue + i + 1;
    }
    sum += smallValue + largeValue;
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
