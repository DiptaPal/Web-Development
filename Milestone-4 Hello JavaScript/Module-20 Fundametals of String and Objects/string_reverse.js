const sentence = "I want to learning web dev."


// for of
let reverse = ""
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);


// for
let rev = "";
for(let i = 0; i < sentence.length; i++){
    rev = sentence[i]+rev;
}
console.log(rev);

// shortcut
const reversed = sentence.split('').reverse().join("");
console.log(reversed);