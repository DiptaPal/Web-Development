const numbers = [1, 3, 6, 3, 10, 32];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc
}, numbers[0]);
console.log(max);

// Count Occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana"];

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc;
}, {});
console.log(count);
