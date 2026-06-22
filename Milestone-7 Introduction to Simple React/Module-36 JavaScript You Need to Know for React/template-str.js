/* const fname = "Dipta";
const lname = "Pal";
console.log(`I am ${fname} ${lname}`);
 */

// normal function hoisting hoi.
/* function sum(){
    console.log(arguments);
} */

// const sum = () => a + b;

/* const total = (...rest) => {
    console.log(rest);
};

total(1, 4, 6); */

/* const total2 = (a, b, c) => {
    const result = a + b + c;
    return result;
}

console.log(total2(1, 2, 3)); */


// spread operator

const numbers = [1, 2, 3, 4, 5, 6];

console.log(...numbers);

const newNumbers = [...numbers, 7, 8, 9];
console.log(newNumbers);