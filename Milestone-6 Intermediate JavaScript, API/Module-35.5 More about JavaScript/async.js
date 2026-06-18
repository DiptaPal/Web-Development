console.log("One");
console.log("Two");

setTimeout(callThree, 5000);
setTimeout(() => {
    console.log("New Three in setTimeout");
}, 4000);
/* fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data)); */
console.log("Four");
console.log("Five");

function callThree() {
    console.log("Three");
}
