const sumAll = function(lowerBound, upperBound) {
    /**
     * Pseudocode:
     * Check inputs
     * Take 2 numbers and return the sum of all numbers between and including them.
     * 
     */
    if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) return 'ERROR';
    if (lowerBound < 0 || upperBound < 0) return 'ERROR';
    if (lowerBound > upperBound) [lowerBound, upperBound] = [upperBound, lowerBound]
    
    let sum = 0;
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
