const school = "Wrexham School.";
console.log(school.toUpperCase());

const subject = "Chemistry";
const book = "chemistry";

if (subject.toLowerCase() === book) {
    console.log("I am reading book.");
} else {
    console.log("Subject and book is not same.");
}

const drink = "water ";
const liquid = "  water  ";
if(drink.trimEnd() === liquid.trim()){
    console.log("I want to drink.");
} else {
    console.log("I don't want to drink.");
}
