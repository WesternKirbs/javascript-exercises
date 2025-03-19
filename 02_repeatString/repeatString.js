const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    if(num == 0) return "";

    let res = "" + str;
    while(num > 1){
        res += str;
        num--;
    }
    return res;

};

// Do not edit below this line
module.exports = repeatString;
