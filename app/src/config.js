const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || "mongodb://mongo:27017",
  dbName: process.env.DB_NAME || "octopusdb",
  collectionName: process.env.COLLECTION_NAME || "fruits"
};

module.exports = config;
