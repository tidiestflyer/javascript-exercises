let arrayToModify = "";

const removeFromArray = function() {
    for (i = 0; i < (arguments.length - 1); i++) {
        let toDelete = arguments[i + 1];
        console.log(toDelete);

        for (i1 = 0; i1 < (arguments[0].length); i1++) {
            arrayToModify = arguments[0];
            console.log(arrayToModify[i1] + " " + toDelete);
            if (arrayToModify[i1] === toDelete) {
                console.log("Matched, delete this statement");
                arrayToModify.splice([i1], 1);
                i1 = 0;
            } else {
                console.log("If did not match...")
            }
        }
    }
    console.log(arrayToModify);
    return arrayToModify;
};
// Do not edit below this line
module.exports = removeFromArray;
