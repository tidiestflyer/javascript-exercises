const sumAll = function() {
    let sum = 0;
    let lowEnd = 0;

    //First check for improper input arguments
    for (i = 0; i < (arguments.length); i++) {
        if (typeof arguments[i] !== "number") {
            console.log("Wrong type");
            return "ERROR"
        } else if (Math.floor(arguments[i]) !== arguments[i]) {
            console.log("Number contains a float")
            return "ERROR"
        } else if (arguments[i] < 0) {
            console.log("Number is negative");
            return "ERROR"
        }
    }
    console.log("All checks passed");

    //This returns the smaller value between the two arguments
    if (arguments[0] > arguments[1]) {
        lowEnd = arguments[1];
    } else {
        lowEnd = arguments[0];
    }
    //This gets the number of missing values between the arguments and returns it as a positive
    let inBetweenCount = arguments[0] - arguments[1];
    if (inBetweenCount < 0) {
        inBetweenCount = inBetweenCount * -1
    }

    //This will add all the inbetween values to the total sum starting from the lowEnd
    for (i = 1; i < inBetweenCount; i++) {
        sum = sum + (lowEnd + i);
    }
    sum = sum + (arguments[0] + arguments[1]);
    console.log("Total sum is " + sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
