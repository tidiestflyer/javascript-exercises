const fibonacci = function(sequence) {
    if(sequence == 0) return 0;
    if(sequence == 1) return 1;
    if(sequence < 0) return "OOPS";

    firstPrev = 1;
    secondPrev = 0;
    console.log(sequence);

    for(i = 1; i < sequence; i++) {
        accumulation = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = accumulation;
    }
    return accumulation;
};

// Do not edit below this line
module.exports = fibonacci;
