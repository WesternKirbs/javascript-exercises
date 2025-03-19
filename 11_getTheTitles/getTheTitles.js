const getTheTitles = function(books) {
    let titles = [];
    for(b of books){
        titles.push(b.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
