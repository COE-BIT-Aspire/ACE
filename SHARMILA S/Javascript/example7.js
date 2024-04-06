//find method
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
];
const user = users.find(user =>user.id === 2);
console.log(user);


//filter method
const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);



//reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((initial, currentValue) => initial + currentValue, 0);
console.log(sum);

  