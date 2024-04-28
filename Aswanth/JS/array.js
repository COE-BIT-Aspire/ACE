//Creating an array without initializing
// let arr = new Array(10);
// arr[1]="Thianesh";
// arr[2]=1;
// arr[3]=0.22;
// console.log(arr);

// //another method
// let array1 = [1,2,3,4,5];
// array1[1]=20;
// array1[5]=6;//size can be increased
// console.log(array1);
// array1[1]=2;

// //nested array
// let array2 = [7,8,9,10];
// let array3 = new Array(array1,array2);
// console.log(array3);

// //In-bult function
// let fruits = ["mango" , "apple" , "grape" , "banana"];
// fruits.sort();//sort function
// console.log(fruits);
// fruits.reverse();//reverse function
// console.log(fruits);

// //sorting an numeric array
let nums = [5,2,3,1,4];
nums.sort();
console.log(nums);
nums.sort((a,b) => {return a-b});//No difference betwen both sort functions
console.log(nums);
nums.sort((a,b) => {return b-a});//Sorting in descending order
console.log(nums);

//Concat
let num1 = [1,2,3,4];
let num2 = [4,5,6];
console.log(num1.concat(num2));