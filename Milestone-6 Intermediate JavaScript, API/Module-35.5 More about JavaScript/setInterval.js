console.log(1);
console.log(2);
let count = 0;

const intervalId = setInterval(() => {
    console.log(count++);
    if (count > 10) {
        clearInterval(intervalId);
    }
}, 1000);
console.log(intervalId);
console.log(4);
console.log(5);
