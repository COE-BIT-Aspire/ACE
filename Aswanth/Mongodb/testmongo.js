const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/Aspire";

const client = new MongoClient(url);

async function MongoConnect () {
    try {
        await client.connect();

        const db = client.db("Aspire");
        const collection = db.collection("Employee");

        const inserter = await collection.insertMany([
            {
                _id: 11,
                firstName: "thianesh",
                lastName: "G",
                gender: "male",
                email: "thianesh.t@abc.com",
                salary: 10000,
                department: { name: "embedded" },
            },
            {
                _id: 12,
                firstName: "senthil",
                lastName: "K",
                gender: "male",
                email: "senthil.t@abc.com",
                salary: 1000,
                department: { name: "embedded" },
            },
            {
                _id: 13,
                firstName: "sujeeth",
                lastName: "K",
                gender: "male",
                email: "sujeeth.t@abc.com",
                salary: 10000,
                department: { name: "embedded" },
            },
        ]);

        console.log("Record inserted with id: "+inserter._id);

        await collection.updateOne({'firstName': "thianesh"}, {$set:{'salary': "20000"}}, {upsert:true});

        await collection.updateOne({'firstName': "senthil"}, {$set:{'salary': "2000"}}, {upsert:true});

        await collection.deleteOne({'firstName': "sujeeth"});

        const cursor = collection.find({});

        await cursor.forEach(record => {
            console.log(record);
        });
        await client.close();
    } catch(error){
        console.error("Error connecting to MongoDB: ", error);
    }
}

MongoConnect();