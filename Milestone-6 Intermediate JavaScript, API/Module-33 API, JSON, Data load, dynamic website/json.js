const person = {
    name: "dip",
    fruit: "orange",
    dish: "ctm",
    friends: ["arnob", "razib", "fahad"],
    isRich: false,
    money: 34000,
};

console.log(person);

// JSON => JS object with notation 
// JSON.stringify => string

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

// JSON.parse => object

const personParse = JSON.parse(personJSON);
console.log(personParse, typeof personParse);


