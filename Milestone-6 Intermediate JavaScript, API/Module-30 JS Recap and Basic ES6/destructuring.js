const { price, quantity } = {
    name: "shirt",
    price: 500,
    quantity: 7,
};
console.log(price, quantity);

// default value and name modify
const {
    full_name,
    age: Age,
    working = "full-time",
} = {
    full_name: "Razib Hossian",
    age: 32,
    marital_status: "unmarried",
    education: "MSc",
};
console.log(full_name, Age, working);
