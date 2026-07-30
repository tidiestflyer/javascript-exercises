const getTheTitles = function() {
    let books = arguments[0];
    let outputArray = [];
    for (i = 0; i < books.length; i++) {
        outputArray[i] = books[i].title;
    }
    return outputArray
};

// Do not edit below this line
module.exports = getTheTitles;
