const fibonacci = function() {
    let fibo1 = 1;
    let fibo2 = 0;
    let fiboOutput = 0;

    if (arguments[0] < 0) {
        return "OOPS";
    }
    //In my head I'm envisioning the values sliding as they are used. fiboOutput => fibo2 => fibo1. fiboOutput is the result at the given sequence.
    for (i = 0; i < arguments[0]; i++) {
            fiboOutput = fibo1 + fibo2;
            fibo1 = fibo2;
            fibo2 = fiboOutput;
    }
    return fiboOutput;
};

// Do not edit below this line
module.exports = fibonacci;
