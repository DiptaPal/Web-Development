const people = {
    name: "Dipta Pal",
    action: function () {
        console.log(this.name);
    },
};

people.action();

class Person3 {
    #status; //private or encapsulation
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep() {
        console.log(`${this.name} sleeps at 10PM`);
    }
    action() {
        console.log(this.#status);
    }
}

const person4 = new Person3("Dipta Pal", 27, "single");
console.log(person4);

// we can't access status because of encapsulation
// console.log(person4.status); //undefine
// console.log(person4.#status); //error
person4.sleep();
person4.action();
console.log(person4.age);
