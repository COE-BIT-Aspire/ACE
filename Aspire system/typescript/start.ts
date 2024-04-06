
 //inheritance
 class Animal {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
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
  name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  startEngine(): void {
      console.log("Engine started");
  }
}

class ElectricCar extends Car {
  constructor(name: string) {
    super(name);
  }

  startEngine(): void {
      console.log("Electric engine started");
  }
}

class GasCar extends Car {
  constructor(name: string) {
    super(name);
  }

  startEngine(): void {
      console.log("Gasoline engine started");
  }
}

let electricCar = new ElectricCar('Tesla');
let gasolineCar = new GasCar('Toyota');

electricCar.startEngine();

gasolineCar.startEngine(); 