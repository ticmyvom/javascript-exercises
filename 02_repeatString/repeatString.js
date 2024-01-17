const repeatString = function(string, num) {
    // repeat `string` `num` times
    /**
     * Pseudocode:
     * for loop from 0 to num, append string to the final result 
     * return result
     */
    if (num < 0) {
        return 'ERROR';
    } else {
        let result = '';
        for (let i = 0; i < num; i++) {
            if (!string){ // if string is empty, return right away
                return '';
            }
            result += string;
        }
        return result;
    }
    

};

// Do not edit below this line
module.exports = repeatString;
