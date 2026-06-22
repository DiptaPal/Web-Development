// falsy value:
// 0, -0, "", undefine, null, false

// truthy value:
// "dsfwe", 3234, {}, [], true

const test = "rahim";
if (test) {
    console.log("It's truthy");
} else {
    console.log("It's falsy");
}

// ternary operator
test ? console.log("It's truthy") : console.log("It's falsy");

const num = 10;
const result = num >= 10 && num <= 20 ? "true" : "false";
console.log(result);

const isActive = true;
console.log(!isActive);

const showUser = () => console.log("show user green");
const hideUser = () => console.log("Hide user");

isActive ? showUser() : hideUser();

isActive && showUser();
isActive || hideUser();


const num1 = 10;
const result1 = num1 + "";
console.log(typeof parseInt(result1));
