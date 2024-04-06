////////////////////////////////////////////////////////Array Declaration - 1) It's size can be altered any time  2) It's values can be redeclared any time///////////////////////////////
// let arr = [1, "Asro", true, 45];
// console.log(arr);
// arr[1] = "chumma";
// console.log(arr);
// arr[4] = "Moshi Moshi";
// console.log(arr);

//////////////////////////////////////////////////////Array method creation and Direct Intialization///////////////////////////////////////////////////////////
// let arr = new Array(5);
// arr[0] = 45;
// arr[1] = true;
// arr[2] = "Asro";
// arr[4] = "Moshi Moshi";
// console.log(arr);

//////////////////////////////////////////////////////Concatination/////////////////////////////////////////////////////////////////////////////////////////////
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// console.log(arr1.concat(arr2))

/////////////////////////////////////////////////////Nested Array//////////////////////////////////////////////////////////////////////////////////////////////
// let arr1 = [45, "Asro", false, 4];
// let arr2 = [03, "BlackFoot", true, "Moshi Moshi"];
// let arr3 = new Array(arr1, arr2);
// console.log(arr3);

//////////////////////////////////////////////////Inbuilt Functions/////////////////////////////////////////////////////////////////////////////////////////
// let arr = [45, 20, 1, 5, 2];
// arr.sort();/////////Ascending Order
// console.log(arr);
// let arr1 = [4, 2, 1, 3, 6];
// arr1.sort((a,b) => {return a-b});//////////Ascending Order
// console.log(arr1);
// arr1.sort((a,b) => {return b-a});//////////Descending Order
// console.log(arr1);
// let str = ["BlackFoot", "Asro", "Griezii","Moshi Moshi"];
// str.sort();////////////////Ascending Order
// console.log(str);
// str.reverse();////////////Descending Order
// console.log(str);
// let arr =  ["Asro", "Griezii", "BlackFoot"]
// console.log(arr.copyWithin(0,2))//////////////////Copying and replacing within an array
// let arr =  ["Asro", "Griezii", "BlackFoot"]
// arr.forEach(fEfunction)///////////////////Calling the function for each element in an array
// function fEfunction(arr) {
//     console.log(arr)
// }