for (let i = 1; i <= 150; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}
console.log("Outside of the loop");

let n = 1;
while (n <= 50) {
    console.log(n);
    if (n >= 5) {
        break;
    }
    n++;
}
console.log("Outside of the while loop");
