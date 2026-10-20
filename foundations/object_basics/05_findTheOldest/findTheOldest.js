const findTheOldest = function (people) {
    const getAge = (person) => {
        const deathYear = person.yearOfDeath || new Date().getFullYear();
        return deathYear - person.yearOfBirth;
    };
    const sorted = [...people].sort((a, b) => getAge(b) - getAge(a));
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
