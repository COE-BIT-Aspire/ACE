// Number
let temperature: number = 20;
let distance: number = 1000;

console.log("Temperature:", temperature); // 20
console.log("Distance:", distance); //  1000

// Boolean
let isRaining: boolean = false;
let hasSun: boolean = true;

console.log("Is it raining?", isRaining); //  false
console.log("Is there sun?", hasSun); //  true

// String
let greeting: string = "Hello, world!";
let message: string = `Welcome to TypeScript`;

console.log(greeting); //  Hello, world!
console.log(message); //  Welcome to TypeScript

// Function
function multiply(a: number, b: number): number {
    return a * b;
}

console.log("Result:", multiply(5, 3)); //  15

// Any
let dynamicVariable: any = 10;
console.log(dynamicVariable); //  10

dynamicVariable = "Hello";
console.log(dynamicVariable); //  Hello

// Null
let emptyValue: null = null;
console.log(emptyValue); //  null

// Undefined
let undefinedValue: undefined = undefined;
console.log(undefinedValue); //  undefined

// Enum
enum Month {
    January,
    February,
    March,
    April,
    May
}

console.log(Month.January); //  0
console.log(Month.May); //  4

// Class
class Person {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I'm 30 years old.

// Array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// Tuple
let personDetails: [string, number] = ["Alice", 25];
console.log(personDetails); // ["Alice", 25]

// Set
let uniqueLetters = new Set<string>(["a", "b", "c", "a", "b"]);
console.log(uniqueLetters); // Set(3) { 'a', 'b', 'c' }

// Map
let employeeSalaries = new Map<string, number>();
employeeSalaries.set("Alice", 50000);
employeeSalaries.set("Bob", 60000);
console.log(employeeSalaries.get("Alice")); // 50000

// Object
let personObject = {
    name: "Alice",
    age: 30,
    gender: "female"
};
console.log(personObject); //  { name: 'Alice', age: 30, gender: 'female' }
