const { MongoClient } = require("mongodb");
const config = require("./config");

let client;
let db;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function connectToDb(retries = 10, delayMs = 3000) {
  if (db) {
    return db;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      client = new MongoClient(config.mongoUri);
      await client.connect();
      db = client.db(config.dbName);

      console.log(`Connected to MongoDB: ${config.dbName}`);
      return db;
    } catch (error) {
      console.error(
        `Mongo connection attempt ${attempt}/${retries} failed: ${error.message}`
      );

      if (attempt === retries) {
        throw error;
      }

      await sleep(delayMs);
    }
  }
}

function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call connectToDb first.");
  }

  return db;
}

async function closeDb() {
  if (client) {
    await client.close();
    client = null;
    db = null;
  }
}

module.exports = {
  connectToDb,
  getDb,
  closeDb
};