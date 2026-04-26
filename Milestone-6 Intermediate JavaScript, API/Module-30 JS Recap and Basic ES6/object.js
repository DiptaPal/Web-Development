const person1 = {
    name: "Dipta Pal",
    age: 28,
    country: "BD",
    friendList: ["Pal", "Dip", "Abir"],
};

// delete:
delete person1.friendList;
console.log(person1);

// seal: we can't add any entries but we can modify the previous value of the object
// Object.seal(person1);

// freeze: we can't add or modify any values in the object
Object.freeze(person1);

person1.age = 27;
person1.status = "not found";

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));
