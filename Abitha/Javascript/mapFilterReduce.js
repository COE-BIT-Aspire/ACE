
const n1 = [1, 2, 3, 4, 5];
const doubledNumbers = n1.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const n2 = [1, 2, 3, 4, 5];
const evenNumbers = n2.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

const n3 = [1, 2, 3, 4, 5];
const sum = n3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15 (1 + 2 + 3 + 4 + 5)


