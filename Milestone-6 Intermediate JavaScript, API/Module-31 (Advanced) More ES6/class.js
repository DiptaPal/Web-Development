class Product {
    constructor(name, price, brand, color, malik) {
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.color = color;
        this.malik = malik;
    }

    details() {
        console.log(`ami ${this.name} product er details.`);
    }
}

const iphone = new Product("iphone", 1234, "apple", "silver", "Step Jobs");
console.log(iphone);
iphone.details();

const xiaomi = new Product("redmi", 1000, "xiaomi", "orange", "Jani Na");
console.log(xiaomi);
xiaomi.details();

class Person {
    constructor(name, age, education, location) {
        this.name = name;
        this.age = age;
        this.education = education;
        this.location = location;
    }
    address() {
        console.log(`${this.name} is living in the ${this.location}`);
    }
}

const person1 = new Person("Dipta Pal", 27, "MSc", "UK");
console.log(person1);
person1.address();

const person2 = new Person("Dip", 30, "MBA", "UK");
console.log(person2);
person2.address();
console.log(person2 instanceof Person);
