var person = {
    name: "SHARMILA",
    age: 22,
    isStudent: true,
    address: {
        city: "Erode",
        state: "Tamil Nadu",
        country: "India"
    }
};
person.address.city = "sathy";
console.log(person);
console.log(person.address.city);
