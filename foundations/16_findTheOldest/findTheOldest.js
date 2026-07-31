const findTheOldest = function() {
    let peoples = arguments[0];
    let oldestPerson = "";
    let largestAge = 0;
    let ageToCheck = 0;

    let yearOfBirth = 0;
    let yearOfDeath = 0;

    let currentYear = 2027;

    for (i = 0; i < peoples.length; i ++) {
        yearOfBirth = peoples[i].yearOfBirth;
        /*If a person is still alive (has no death year), then the top range for their age calc is the current year.
        For ease of calculation, this is considered their death year. */
        if (peoples[i].yearOfDeath == null || peoples[i].yearOfDeath == undefined) {
            console.log("No Death year");
            yearOfDeath = currentYear;
        } else {
            yearOfDeath = peoples[i].yearOfDeath;
        }
        ageToCheck = yearOfDeath - yearOfBirth;

        if (largestAge < ageToCheck) {
            largestAge = ageToCheck;
            oldestPerson = peoples[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
