const reverseString = function(str) {
    let index = str.length - 1;
    res = "";
    while(index >= 0){
        res += str[index];
        index--;
    }
    return res;


};

// Do not edit below this line
module.exports = reverseString;
