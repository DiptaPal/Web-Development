const name = "Hitman";
console.log("Location", location);
if (true) {
    const data = 58;
    console.log("inside the if block", data, name);
    doMath(43, 443);
    console.log("calling double it", doubleIt(4));
    function doubleIt(x) {
        return x * 2;
    }
}
// console.log(data);

// while(true){

// }

// for(const num of [1,2,3,4,5]){

// }

// function scope or local scope
function doMath(a, b) {
    console.log(a, b);
}

// var location = "Wrexham";
// const location = "Wrexham";
// temporal dead zone
// let location = "Wrexham";
