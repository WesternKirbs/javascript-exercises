const palindromes = function (str) {
    str = str.trim().toLowerCase();
    first = 0;
    end = str.length - 1;
    letters = "abcdefghijklmnopqrstuvwxyz0123456789";
    while(first < end) {
        if(!letters.includes(str[first])) {
            first++;
            continue;
        }
        if(!letters.includes(str[end])) {
            end--;
            continue;
        }
        if(str[first] != str[end]) return false;
        first++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
