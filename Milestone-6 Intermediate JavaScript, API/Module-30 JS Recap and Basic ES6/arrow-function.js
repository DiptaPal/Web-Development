function add(num1, num2) {
    return num1 + num2;
}

const result = add(10, 20);
console.log(result);

const add2 = function (num1, num2) {
    return num1 + num2;
};
console.log(add2(10, 30));

const add3 = (num1, num2) => num1 + num2; //single line arrow function
console.log(add3(20, 30));

const add4 = (num1, num2) => {
    return num1 + num2;
}; //multiple line arrow function

console.log(add4(30, 40));
