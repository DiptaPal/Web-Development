// Array spread:
const myFriends = ["Abir", "Kabir", "Rahul"];
console.log(myFriends);
console.log(...myFriends);

const newFriends = ["Dip", "Razib", ...myFriends];
console.log(newFriends);

const numbers = [1, 4, 6, 7, 34, 2, 45, 8, 35, 75, 434, 67, 46, 353, 243];

// Math.max
console.log(Math.max(...numbers));

// delete front side entries of array:
const [first, seconde, ...rest1] = numbers;
console.log(first);
console.log(seconde);
console.log(rest1);

// Object spread:
const obj = {
    name3: "Dipta Pal",
    id: 02342,
    education: "MSc",
    location: "UK",
};

const obj2 = { ...obj, age: 28 };
console.log(obj2);

// delete front side entries of object:
const { name3, ...rest2 } = obj;
console.log(name3);
console.log(rest2);
