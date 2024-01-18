const removeFromArray = function(array, ...valuesArrayToBeRemoved) {
    /**
     * Implement a function that takes an array and some other arguments then 
     * removes the other arguments from that array:
     * 
     * 1. Remove 1 value
     * Look this value up in `array` and yeet it
     * 
     * 2. Remove multiple values
     * For each value, look it up in `array` and yeet it.
     * 
     * 3. Ignore values that don't exist in the array
     * 
     * 4. Remove all values
     * 
     * 5. Work with strings
     * 
     * 6. Only remove values of the same type
     */
    // console.log(array);
    // for (var i = 0; i < valuesArrayToBeRemoved.length; i++) {
    //     console.log(valuesArrayToBeRemoved[i]);
    // }
    // for (let value of valuesArrayToBeRemoved) {
    //     let position = array.indexOf(value);
    //     if (position === -1) continue;
    //     array.splice(position, 1); // remove 1 element at `position`
    // }
    // return array;
    return array.filter(val => !valuesArrayToBeRemoved.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
