// synchronous function that prints numbers from 1 to 5 synchronously
function printNumbersSync() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

console.log("before calling");
printNumbersSync();
console.log("after calling");

// asynchronous function that prints numbers from 1 to 5 asynchronously
function printNumbersAsync() {
    setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }, 1000); // Prints after 1 second delay
}

console.log("before calling");
printNumbersAsync();
console.log("after calling");


//add two numbers
function addSync(a, b) {
    return a + b;
}

console.log("Before adding");
const result = addSync(2, 3);
console.log("Result:", result);
console.log("After adding");