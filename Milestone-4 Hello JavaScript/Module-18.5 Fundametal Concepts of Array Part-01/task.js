// Task-01
const fruits = ["Apple", "Banana", "Pineapple", "Grasp", "Strawberry"];
console.log(fruits[2]);
fruits[2] = "Pomelo";
console.log(fruits);

// Task-02
const destinations = ["London", "Cardiff", "Paris"];
destinations.push("Turkey");
destinations.push("Barcelona", "India");
destinations.pop();
console.log(destinations);

// Task-03
const books = ["JavaScript", "Python", "C", "React", "PHP"];
console.log(books.includes("JavaScript"));
if(books.includes("C")){
    console.log("C programming book is available.");
} else {
    console.log("Not Available.");
}
