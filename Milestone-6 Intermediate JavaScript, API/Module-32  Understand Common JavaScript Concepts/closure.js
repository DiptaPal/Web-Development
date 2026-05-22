/* function counter() {
    let count = 0;
    function innerFunction() {
        console.log("Inside the inner function, someone called me");
    }
    return innerFunction;
}

const output = counter();
console.log(output()); */

function counter() {
    let count = 10;
    return function innerFunction(user) {
        count = count + 1;
        console.log("Inside the inner function", user, count);
    };
}

const innerFunc = counter();
innerFunc();
innerFunc();

const rohimFunc = counter();
rohimFunc("rohim");
rohimFunc("rohim");
rohimFunc("rohim");
rohimFunc("rohim");

console.log("------------------------------------");

const korimFunc = counter();
korimFunc("korim");
korimFunc("korim");
korimFunc("korim");
rohimFunc("rohim");
