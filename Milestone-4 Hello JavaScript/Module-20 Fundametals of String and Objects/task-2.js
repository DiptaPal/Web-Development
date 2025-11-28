let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true,
};

const keys = Object.keys(myObject);
console.log(keys);

for (let key in myObject) {
    console.log(`key: ${key} | type:  ${typeof myObject[key]}`);
}
