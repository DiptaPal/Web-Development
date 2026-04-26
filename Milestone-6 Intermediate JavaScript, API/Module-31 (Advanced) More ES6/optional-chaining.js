const person = {
    name: "Hena",
    1: 100,
    age: 25,
    true: "you can't access by dot notation",
    friends: ["Hero Alom", "Josim", "Arnob"],
    details: {
        job: "yes",
        isMarried: true,
        status: "no found",
        father: {
            name: "Zambu",
        },
    },
};

// dot notation
console.log(person.name);
console.log(person.friends[1]);
console.log(person.details.father);
console.log(person.details?.mother?.name);
// console.log(person.1); we can't access by dot notation
// console.log(person.true);

// bracket notation
console.log(person["name"]);
console.log(person["details"]["job"]);
console.log(person["1"]);
console.log(person["true"]);
console.log(person["details"]?.["mother"]?.["name"]);
