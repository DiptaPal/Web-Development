function oddAverage(numbers) {
    let count = 0;
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            sum += number;
            count++;
        }
    }
    console.log(sum, count);
    return sum / count;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];

console.log(oddAverage(numbers));
