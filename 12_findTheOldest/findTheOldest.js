// const findTheOldest = function(peopleArray) {
//     /**
//      * use sort with a customized function to sort the age from oldest to youngest
//      * return the first person in this sorted array
//      * 
//      * Note that a person may still be living
//      */
//     peopleArray.sort(ageComparison);
//     return peopleArray[0];
// };

// const ageComparison = function(a, b) {
//     let currentYear = new Date().getFullYear(),
//         aAge = (a.yearOfDeath || currentYear) - a.yearOfBirth,
//         bAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;
//     return bAge - aAge;
// }

const findTheOldest = function(peopleArray) {
    /**
     * Another way is with reduce. 
     * Since we only need to find max age, sorting is inefficient
     */
    return peopleArray.reduce((oldest, current) => {
        let oldestAge = getAge(oldest),
            currentAge = getAge(current);
        return (oldestAge > currentAge ? oldest : current);
    });
}

const getAge = function(person) {
    let currentYear = new Date().getFullYear();
    return (person.yearOfDeath || currentYear) - person.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
