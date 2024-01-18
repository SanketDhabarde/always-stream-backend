const mongoose = require("mongoose");
const mongoDbURL = process.env.MONGO_DB_URL;

const initializeDbConnection = async () => {
  try {
    await mongoose.connect(mongoDbURL, {
        dbName: 'always-stream'
    });
    console.log("Connected successfully to DB");
  } catch (error) {
    console.error(`Mongoose connection failed ${error}`);
  }
};

module.exports = { initializeDbConnection };
