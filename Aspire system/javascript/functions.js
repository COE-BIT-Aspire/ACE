function ispositive(num)
    {
     return num>0;
    }
    console.log(ispositive(5));
 function findproduct(num1,num2)
 {
    return num1*num2;
 }
 console.log(findproduct(4,5));
 console.log(findproduct);
 let volume=(l,b,h)=>
 {return l*b*h}
 console.log(volume(3,4,5));
 const names=["Ravi","Raina","Suresh","parag","dhoni"];
 const lengthofstring=names.map(function (a)//normal function.
 {
   return a.length;
 });
 console.log(lengthofstring);
 //arrow function;
 const lengthofnames=names.map((s)=>s.length);
 console.log(lengthofnames);
 
 const inventory = [
   { name: "apples", quantity: 2 },
   { name: "bananas", quantity: 0 },
   { name: "cherries", quantity: 5 },
 ];
 
 const result = inventory.find(({name}) => name === "cherries");
 
 console.log(result);
 function isCherries(fruit) {
   return fruit.name === "cherries";
 }
 
 console.log(inventory.find(isCherries));
 const a=[1,2,3,4,5];
 const a2=a.filter((b)=>b>4);
 console.log(a2);
 function greater4(number)
 {
   return number>4;
 }
 console.log(a.filter(greater4));

 function getData(callback) {
  setTimeout(function() {
      callback("hello world");
  }, 2000);
}

function putData(data) {
  console.log(data);
}

getData(putData);

let promise = new Promise(function (resolve, reject) {
    const x = "senthil";
    const y = "senthil";
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
 
promise.
    then(function () {
        console.log('Success');
    })
    .catch(function () {
        console.log('Error');
    });