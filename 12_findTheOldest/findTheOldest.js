const findTheOldest = function(people) {
    max = 0;
    max_index = 0
    for(let i = 0;i<people.length;i++) {
        let death = (!people[i].hasOwnProperty("yearOfDeath")) ? 2025 : people[i].yearOfDeath; 
        age = death - people[i].yearOfBirth;
        if(age > max){
            max = age;
            max_index = i;
        }
    }
    return people[max_index];
};

// Do not edit below this line
module.exports = findTheOldest;
