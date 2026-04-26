class Vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("I can move.");
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }

    route() {
        console.log("Dhake to Cox's Bazar.");
    }
}

const greenLine = new Bus("Green Line", 12000, 50);
console.log(greenLine);
greenLine.move();
greenLine.route();

class Truck extends Vehicle {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }

    condition() {
        console.log("This is super fast.");
    }
}
