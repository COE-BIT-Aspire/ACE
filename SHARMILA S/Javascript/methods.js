//find method
const users = [
    { id: 1, name: 'John', salary:15000 },
    { id: 2, name: 'Alice', salary:20000 },
    { id: 3, name: 'Bob', salary:25000 }
];
const user = users.find(user =>user.id === 2);
console.log(user);


//filter method
let students = [
    { id: 1, name: 'John', age: 20, grade: 'A' },
    { id: 2, name: 'Emily', age: 22, grade: 'B' },
    { id: 3, name: 'David', age: 21, grade: 'C' },
    { id: 4, name: 'Sarah', age: 19, grade: 'A' },
    { id: 5, name: 'Michael', age: 23, grade: 'B' }
];
function filterStudentsByAge(minAge, maxAge) {
    return students.filter(student => student.age >= minAge && student.age <= maxAge);
}
function filterStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}
console.log("Students aged between 20 and 22:", filterStudentsByAge(20, 22));
console.log("Students with grade 'A':", filterStudentsByGrade('A'));



//reduce
let staff = [
    { id: 1, name: 'Alice', department: 'HR', salary: 50000 },
    { id: 2, name: 'Bob', department: 'Finance', salary: 60000 },
    { id: 3, name: 'Charlie', department: 'IT', salary: 70000 },
    { id: 4, name: 'David', department: 'HR', salary: 55000 },
    { id: 5, name: 'Emily', department: 'Finance', salary: 65000 }
];

let totalSalary = staff.reduce(function(accumulator, currentStaff) {
    return accumulator + currentStaff.salary;
}, 0);

console.log("Total salary of all staff:", totalSalary);

let highestSalary = staff.reduce(function(maxSalary, currentStaff) {
    return (currentStaff.salary > maxSalary) ? currentStaff.salary : maxSalary;
}, 0);

console.log("Highest salary among staff:", highestSalary);


  