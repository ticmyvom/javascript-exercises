const palindromes = function (str) {
    str = str.toLowerCase().split('');
    let alphanumStrArray = [];
    str.forEach((char) => {
        if (isAlphanumeric(char)) {
            alphanumStrArray.push(char);
        }
    });
    // alphanumStrArray should now contains alphanumeric characters only from str

    // let leftIndex = 0,
    //     rightIndex = alphanumStrArray.length - 1 - leftIndex;
    // while (leftIndex <= rightIndex) {
    //     if (alphanumStrArray[leftIndex] !== alphanumStrArray[rightIndex]) {
    //         return false;
    //     }
    //     leftIndex++;
    //     rightIndex--;
    // }
    // return true;
    let alphanumStr = alphanumStrArray.join('');
    return alphanumStrArray.reverse().join('') === alphanumStr;
};

function isAlphanumeric(char) {
    return /\w+/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
