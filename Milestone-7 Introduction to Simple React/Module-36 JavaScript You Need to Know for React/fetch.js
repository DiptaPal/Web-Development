const person = {
    name: "Kamal Pasha",
    age: 40,
    friends: ["bd", "hena", "keka apa", "nagin"],
    family: {
        fatherName: "Kolim Uddin",
        motherName: "Selina Khatun",
    },
};
/* 
const jsonData = JSON.stringify(person);
console.log(jsonData);

const planData = JSON.parse(jsonData);
console.log(planData);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);
 */

// fetch chaining method

/* fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data)); */

// array of object
const products = [
    { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
    { name: "sam", brand: "samsung", price: 5000, color: "white" },
    { name: "apple1", brand: "apple", price: 5000, color: "gold" },
    { name: "apple2", brand: "apple", price: 5000, color: "gold" },
    { name: "redmi2", brand: "xiaomi", price: 2000, color: "black" },
];

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray",
};

const newArray = [...products, newData];
console.log(newArray);

const remainingProducts = products.filter(
    (product) => product.brand !== "xiaomi",
);
console.log(remainingProducts);

const newArray2 = [...remainingProducts, newData];
console.log(newArray2);
