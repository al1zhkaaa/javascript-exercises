const fibonacci = function(num) {
    if (num < 0 || !Number.isInteger(num)){
        return "OOPS";
    } 
    if ( num === 0) return 0;
    if (num === 1) return [0];
    const fib = [1, 1];
    for(let i = 2; i < num; i++){
        const nextNum = fib[i - 1] + fib[i - 2];
        fib.push(nextNum);
    }
    return fib[num - 1];

};

// Do not edit below this line
module.exports = fibonacci;
