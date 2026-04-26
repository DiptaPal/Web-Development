const numbers = [1, 2, 3, 4, 5, 6];

let temp = [];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    const sum = element + 1;
    temp.push(sum);
}
console.log(temp);

// array map
const newArray = numbers.map((value) => value + 1);
console.log(newArray);

const squareArray = numbers.map((element) => element * element);
console.log(squareArray);

const friends = ["Rahim", "Korim", "Sagor", "Jomir"];

// for loop:
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}

// array map:

const newFriends = friends.map((element, index) => {
    console.log(`Index: ${index}, Friend: ${element}`);
});
