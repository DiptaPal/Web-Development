// falsy: undefine, zero, empty string, false, null, undefine

let data; //falsy
data = 0; //falsy
data = ""; //empty string is falsy
data = " "; //has an white space
data = "0"; //truthy
data = false; //falsy
data = true; //truthy
data = null; //falsy
data = {}; //truthy
data = []; //truthy
data = undefined; //falsy
data = [];
console.log("Value of data", data);
if (data) {
    console.log("Value of data is truthy");
} else {
    console.log(data, "is falsy");
}

// if i need to capture the falsy value to go inside if block

// use logical not
if (!data) {
    console.log("inside if with a falsy value");
}

// capture all positive value
// double not !!
// capture any value to boolean (true false)
if(!!data === true){
    console.log("only true inside the double not");
}
