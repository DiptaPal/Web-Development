// undefine --> not define

let money;
console.log(money);

function total(a, b) {
    console.log("Value of parameter", a, b);
    const sum = a + b;
    console.log("Total is", sum);
}

// total(2);
const result = total(2, 7);
console.log("Value of function call", result);

function total2(a, b) {
    console.log("Value of parameter", a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}

const result2 = total2(1);
console.log("result2", result2);


const phone = {
    name: "Iphone",
    price: 12500
}
console.log(phone.color);

const banks = ["Sonali", "Pubali", "Brac", "BCB"];
console.log(banks[4]);
delete banks[1];
console.log(banks[1]);

console.log("Type of undefine: ",typeof undefined);

console.log("Type of null", typeof null);