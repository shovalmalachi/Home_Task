const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017";
const DB_NAME = process.env.DB_NAME || "octopusdb";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "fruits";

const fruits = [
  { _id: 1, name: "apples", qty: 5, rating: 3 },
  { _id: 2, name: "bananas", qty: 7, rating: 1, microseiverts: 0.1 },
  { _id: 3, name: "oranges", qty: 6, rating: 2 },
  { _id: 4, name: "avocados", qty: 3, rating: 5 }
];

async function seed() {
  const client = new MongoClient(MONGO_URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    await collection.deleteMany({});
    await collection.insertMany(fruits);

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
