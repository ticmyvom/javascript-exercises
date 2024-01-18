const leapYears = function(year) {
    /**
     * Leap years are years divisible by four (like 1984 and 2004). However, 
     * years divisible by 100 are not leap years (such as 1800 and 1900) unless 
     * they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
     * (Yes, it's all pretty confusing)
     * 
     * 400 = 4 * 4 * 25
     * 100 = 4 * 25
     * 4   = 4
     * 
     * Pseudocode:
     * Check if the year is a multiple of 100, then return true if it is divisible by 400
     * Else, return if the year is divisible by 4
     */
    if (year % 100 === 0) return (year % 400 === 0); // century years
    return (year % 4 === 0); // non-century years

};

// Do not edit below this line
module.exports = leapYears;
