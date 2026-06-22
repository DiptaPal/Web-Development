// Variable
/* 
    1. var
    2. let 
    3. const
*/

// let name = "Dipta";
// name = "Dipta Pal";

// const countryName = "BD";

// if-else

/* const num = 40;
if (num >= 20 && num <= 30) {
    console.log("Yes");
} else {
    console.log("No");
} */

const friends = ["Hero", "SRK", "Jamal", "Korim", "Rihab"];
// console.log(friends[1]);

/* friends.push("Kabir");
friends.pop();
friends.unshift("BD");
friends.shift();
console.log(friends);
console.log(friends.slice(2, 4));
console.log(friends.splice(2, 4)); */

// for loop

for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element);
}

/* function sum (a, b){
    console.log(arguments);
    console.log(...arguments);
    const result = a + b;
    console.log(result);
}

sum(4,5); */

// object
const person = {
    name: "Dipta",
    age: 28,
    friends: friends,
};

person.name = "Dipta Pal";

console.log(person);
console.log(person.name);
