const sumAll = function(n1, n2) {
    if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1<0 || n2<0)
        return "ERROR";

    return ((n1 + n2) / 2) * (Math.max(n1,n2) - Math.min(n1,n2) + 1);

};

// Do not edit below this line
module.exports = sumAll;
