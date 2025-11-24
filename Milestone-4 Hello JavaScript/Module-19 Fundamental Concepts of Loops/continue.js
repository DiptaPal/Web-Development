// continue --> skip rest of the code for this iteration;
//break --> i am done with this loop;

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

let n = 0;
while (n < 50) {
    n++;
    if (n % 5 === 0) {
        continue;
    }
    console.log(n);
}
