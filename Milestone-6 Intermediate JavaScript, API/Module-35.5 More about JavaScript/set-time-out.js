console.log(1);
console.log(2);
const timeoutID = setTimeout(() => {
    console.log(3);
}, 4000);
const timeoutID2 = setTimeout(() => {
    console.log(3);
}, 4000);
console.log("TimeOutID", timeoutID, timeoutID2);
clearTimeout(timeoutID2);
console.log(4);
console.log(5);
