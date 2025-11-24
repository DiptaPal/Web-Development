// odd numbers

for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// give me the list numbers between 1 to thirty which is divided by 5

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// give me sum of the numbers from 1 to 20 that are divided by 3

let total = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        total += i;
    }
}
console.log(total);
