const leapYears = function(y) {
    if(!(y % 400)) return true;
    else if(!(y % 100)) return false;
    else if(!(y % 4)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
