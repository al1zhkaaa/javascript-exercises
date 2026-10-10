const removeFromArray = function (arr, ...others) {
    function shouldKeep(num){
        return !others.includes(num)
    }
    return arr.filter(shouldKeep);


};

// Do not edit below this line
module.exports = removeFromArray;
