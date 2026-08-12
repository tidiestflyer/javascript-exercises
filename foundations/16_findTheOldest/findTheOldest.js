const findTheOldest = function(arr) {
    currentYear = new Date().getFullYear();
    sortedArray = arr.sort((a, b) => {
        if (a.yearOfDeath == undefined) {
            deathA = currentYear;
        } else {
            deathA = a.yearOfDeath;
        }

        if (b.yearOfDeath == undefined) {
            deathB = currentYear;
        } else {
            deathB = b.yearOfDeath;
        }
        ageB = (deathB - b.yearOfBirth);
        ageA = (deathA - a.yearOfBirth);
        return ageB - ageA;
    });
    return arr[0];
    console.log(currentYear);
};

// Do not edit below this line
module.exports = findTheOldest;
