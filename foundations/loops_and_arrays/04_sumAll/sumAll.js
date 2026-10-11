const sumAll = function(num1, num2) {
    if (num1 > 0 && num2 > 0 && Number.isInteger(num1) && Number.isInteger(num2)){
        let a = num1;
        let b = num2;
        let sum = 0;
        if (num1 > num2 || num1 === num2){
             a = num2;
             b = num1;
        }
        for(let i = a; i <= b; i++){
            sum += i;

        }
        return sum;
        
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
