const friends = ["Kamal", "Jamal", "Rahul", "Rahim"];

// old style
/* const element1 = friends[0];
const element2 = friends[1];
const element3 = friends[2];
const element4 = friends[3];
console.log(element1, element2, element3, element4); */

// array destructuring

const [element1, element2, element3, element4] = friends;
console.log(element1, element2, element3, element4);

const person = {
    name: "Jani Na",
    age: 25,
    bondhu: ["kamal", "jamal"],
    country: "Bangladesh",
};

// object destructuring

const { age, name, country, bondhu } = person;
console.log(bondhu);
