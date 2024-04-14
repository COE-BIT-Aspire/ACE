var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy ", "Golden Retriever");
dog.move(10);
dog.bark();
//polymorphism
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = '';
        this.name = name;
    }
    Car.prototype.startEngine = function () {
        console.log("Engine started");
    };
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(name) {
        return _super.call(this, name) || this;
    }
    ElectricCar.prototype.startEngine = function () {
        console.log("Electric engine started");
    };
    return ElectricCar;
}(Car));
var GasCar = /** @class */ (function (_super) {
    __extends(GasCar, _super);
    function GasCar(name) {
        return _super.call(this, name) || this;
    }
    GasCar.prototype.startEngine = function () {
        console.log("Gasoline engine started");
    };
    return GasCar;
}(Car));
var electricCar = new ElectricCar('Tesla');
var gasolineCar = new GasCar('Toyota');
electricCar.startEngine();
gasolineCar.startEngine();
