// Write a JavaScript code to reverse the array colors without using the reverse method.
/* 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColors = [];
for(let i = colors.length - 1; i >= 0; i--){
    // console.log(colors[i]);
    revColors.push(colors[i]);
}
console.log(revColors); 
*/

// Write a JavaScript code to get the even numbers from an array using any looping technique.

/* const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNum = [];
for (const num of numbers) {
    if (num % 2 === 0) {
        evenNum.push(num);
    }
}
console.log(evenNum); */

// Use a for...of loop to concatenate all the elements of an array into a single string.

/* var numbers = ["Tom", "Tim", "Tin", "Tik"];
let numStr = "";
for (const num of numbers) {
    numStr = numStr + num;
}
console.log(numStr); */

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

/* const statement = "I am a hard working person";

console.log(statement.split(" ").reverse().join(" "));
 */

// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
/* const arr = [1, 2, 3];
const arr2 = [...arr];
arr2[0] = 99;
console.log(arr);
console.log(arr2); */

// Given an array of student objects, print each student’s name and marks.

/* const subjects = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 },
];

for(const sub of subjects){
    console.log(`${sub.name} scored ${sub.marks}`);
}
 */

// Given a 2D array, update the value at second row first item to 99 and print the updated array.

/* const twoDArray = [
    [1, 2],
    [3, 4],
    [5, 6],
];
twoDArray[1][0] = 99;
console.log(twoDArray);
 */
