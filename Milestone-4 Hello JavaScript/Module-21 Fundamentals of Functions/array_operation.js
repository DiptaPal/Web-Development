function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log("Sum of number is: ", sum);
