// const { Collection } = require("mongoose");

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017";
const dbName = "aspire";
console.log(url);

MongoClient.connect(url)
  .then(async client => {
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection=db.collection("sample");

    // const sampleData = [
    //   { name: "Jaanu", age: 21, dept: "ECE", city:"Kerala"  },
    //   { name: "Aadhi", age: 24, dept: "AIML", city:"Delhi", gender:"Male" }   
    // ];
    // await db.collection("sample").insertMany(sampleData);
    // console.log("Sample data inserted successfully.");

    const cursor = collection.find();
    await cursor.forEach(element => {
      console.log(element);
    });

    client.close();
  })
  .catch(err => {
    console.error("Connection error:", err);
  });
