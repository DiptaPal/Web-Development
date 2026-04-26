const number = 23;
// string, number, boolean
if (typeof number === "number") {
    console.log("Value is a number");
} else {
    console.log("Value is not a number");
}

const numbers = [10, 23, 24, 40];
console.log(typeof numbers);
console.log(Array.isArray(numbers));

const student = {
    name: "Dipta Pal",
    id: "s24011735",
};
console.log(typeof student);
console.log(isNaN(23));
console.log(isNaN("23"));
console.log(isNaN("str"));
