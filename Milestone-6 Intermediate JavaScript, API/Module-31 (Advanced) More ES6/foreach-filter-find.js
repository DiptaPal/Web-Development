const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "black", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" },
];

// array method: map, foreach, filter, find

//map: it returns an array
const updateProducts = products.map((product) => {
    if (product.brand === "apple") {
        product.price = product.price + 100;
    }
    return product;
});
console.log(updateProducts);

// forEach: it doesn't return nothing
products.forEach((product) => {
    if (product.color === "gold") {
        console.log(product);
    }
});

// filter: it returns new array; no match: empty array

const newProducts = products.filter((product) => product.price > 1000);
console.log(newProducts);

const iphoneProduct = products.filter((p) => p.brand === "apple");
console.log(iphoneProduct);

// find: it returns an object [base on condition first object return]; no match: undefine
const product = products.find((p) => p.color === "gold");
console.log(product);

const singleProduct = products.find((p) => p.id === 3);
console.log(singleProduct);
