const required = (value, name) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const config = {
  port: process.env.PORT || 3000,

  mongoUri: process.env.NODE_ENV === "production"
    ? required(process.env.MONGO_URI, "MONGO_URI")
    : process.env.MONGO_URI || "mongodb://mongo:27017/octopusdb",

  dbName: process.env.DB_NAME || "octopusdb",
  collectionName: process.env.COLLECTION_NAME || "fruits"
};

module.exports = config;
