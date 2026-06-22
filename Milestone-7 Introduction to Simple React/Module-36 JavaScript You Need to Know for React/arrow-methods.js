const products = [
    { name: "redmi", brand: "xiaomi", price: 3000, color: "black" },
    { name: "sam", brand: "samsung", price: 5000, color: "white" },
    { name: "apple1", brand: "apple", price: 5000, color: "gold" },
    { name: "apple2", brand: "apple", price: 5000, color: "gold" },
    { name: "redmi2", brand: "xiaomi", price: 2000, color: "black" },
];

// map
const price = products.map((product) => product.price);
console.log(price);

//forEach: no return
products.forEach((product) => console.log(product.price));

// filter
const appleProduct = products.filter((product) => product.brand === "apple");
console.log(appleProduct);

// find: return => first match and single product(object)
const samProduct = products.find((product) => (product.name = "sam"));
console.log(samProduct);
