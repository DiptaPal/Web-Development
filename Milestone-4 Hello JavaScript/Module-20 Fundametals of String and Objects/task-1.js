// Count how many times a string has the letter a
const sentence = "I want to work hard with full focus. A is the first letter of English Alphabet. x is Y and y is X";
// console.log((sentence.match(/a/g) || []).length);
// console.log(sentence.split("a").length - 1);

/* let count = 0;
for(const char of sentence){
    if(char === "a"){
        count++;
    }
}
console.log(count); */

// Count how many times a string has the letter a or A


// console.log((sentence.match(/a/ig) || []).length);
// console.log(sentence.toLowerCase().split("a").length -1);

/* let count = 0;
for(const char of sentence){
    if(char === "a"  || char === "A"){
        count++;
    }
}
console.log(count); */

// Check whether a string contains all the vowels a, e, i, o, u

/* vowels = ["a", "e", "i", "o", "u"];
const containsAllVowels = vowels.every(vowel => sentence.toLowerCase().includes(vowel));
console.log(containsAllVowels); */

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

console.log(sentence.replace(/x/g, "y").replace(/X/g, "Y"));

// Capitalize Every first Letter of each word in a String
console.log(sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));