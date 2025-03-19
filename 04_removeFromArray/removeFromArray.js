const removeFromArray = function(arr, ...theArgs) {
    let len = arr.length
    for(const arg of theArgs){
        let indexs = [];
        let count = 0;
        for(let i = 0;i<len;i++){
            if(arr[i] === arg){
                indexs.push(i);
            }
        }
        for(n of indexs){
            arr.splice(n-count,1);
            count++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
