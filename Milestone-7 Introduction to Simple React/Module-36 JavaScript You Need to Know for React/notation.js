const person = {
    name: "Pasha",
    age: 44,
    friends: ["Korim", "Rohim"],
    salary: 100,
    10: "secret code",
};

const personName1 = person.name;
console.log(personName1);
const personName2 = person["name"];
console.log(personName2);

console.log(person[10]);

// we cannot access 10 by dot notation
// console.log(person.10);
