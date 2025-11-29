function evenNumberOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
const even = evenNumberOnly(numbers);
console.log(even);

function evenNumberSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
    return sum;
}

const numbs = [23, 45, 56, 32, 4];
const everSum = evenNumberSum(numbs);
console.log(everSum);