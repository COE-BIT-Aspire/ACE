"use strict";
//inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("Woof! Woof!");
    }
}
let dog = new Dog("Buddy ", "Golden Retriever");
dog.move(10);
dog.bark();
//polymorphism
class Car {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    startEngine() {
        console.log("Engine started");
    }
}
class ElectricCar extends Car {
    constructor(name) {
        super(name);
    }
    startEngine() {
        console.log("Electric engine started");
    }
}
class GasCar extends Car {
    constructor(name) {
        super(name);
    }
    startEngine() {
        console.log("Gasoline engine started");
    }
}
let electricCar = new ElectricCar('Tesla');
let gasolineCar = new GasCar('Toyota');
electricCar.startEngine();
gasolineCar.startEngine();
