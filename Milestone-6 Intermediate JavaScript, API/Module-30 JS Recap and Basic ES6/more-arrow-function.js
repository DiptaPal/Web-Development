function sum1(num1, num2) {
    console.log(arguments);
    return num1 + num2;
}
sum1(10, 30);

const sum3 = (num1, num2) => {
    // console.log(arguments); //no arguments in arrow function
    return num1 + num2;
};

const test = () => console.log("empty Parenthesis");
test();
const square = (a) => a * a; //no parenthesis
console.log(square(6));

const way3 = (num1, num2) => {
    return num1 + num2; //parenthesis use
};
