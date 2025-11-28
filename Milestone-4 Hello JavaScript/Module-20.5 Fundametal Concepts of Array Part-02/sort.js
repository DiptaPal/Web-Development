const numbers = [12, 32, 52, 234, 23];
const friends = ["Arnob", "Sihab", "Dipto", "Jomir"];
console.log(
    [...numbers].sort(function (a, b) {
        return a - b;
    })
);
console.log(
    [...numbers].sort(function (a, b) {
        return b - a;
    })
);
console.log(friends.sort());
