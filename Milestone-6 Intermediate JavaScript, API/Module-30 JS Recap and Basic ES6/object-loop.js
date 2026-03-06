const person2 = {
    name: "Dipta Pal",
    age: 28,
    friendsList: ["Abir", "Human", "Hridoy"],
    country: "BD",
};

console.log(person2["age"]);
console.log(person2.age);

// Object: for in
// Array: for of

for (let key in person2) {
    console.log(`Key: ${key} Value: ${person2[key]}`);
}

for (let key of Object.entries(person2)) {
    console.log(key);
}

for (let [key, value] of Object.entries(person2)) {
    console.log(`key: ${key}, value: ${value}`);
}
