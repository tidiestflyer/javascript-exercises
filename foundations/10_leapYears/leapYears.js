const leapYears = function() {
    let year = arguments[0];
    let resultOf4 = year / 4;
    let resultOf400 = year / 400;
    let resultOf100 = year / 100;

    let canDivide4 = resultOf4 == Math.floor(resultOf4);
    let canDivide400 = resultOf400 == Math.floor(resultOf400);
    let canDivide100 = resultOf100 == Math.floor(resultOf100);

    if ((canDivide400 == false && canDivide100 == false && canDivide4 == true) || (canDivide400 == true && canDivide100 == true && canDivide4 == true)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
