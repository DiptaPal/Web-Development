// all primitive values(Number, String, Boolean, ...) always pass by value
function multiply(x, y) {
    x = x + 5;
    y = y + 6;
    const mult = x * y;
    return mult;
}

const a = 5;
const b = 7;
console.log("Before the function call: ", a, b);
const result = multiply(a, b);
console.log(result);
console.log("After the function call: ", a, b);

// non primitive values(array, object) are pass by reference
const manik = { name: "manik", balance: 30000 };
const roton = { name: "roton", balance: 50000 };

console.log("Before call: ", manik, roton);

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}

const balance = totalMoney(manik, roton);
console.log("Balance: ", balance);

console.log("After call: ", manik, roton);
