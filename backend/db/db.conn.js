const mongoose = require("mongoose");

const MONGOURI = process.env["MONGODB"];

const initializeDatabase = async () => {
  try {
    const connect = await mongoose.connect(MONGOURI);
    if (connect) {
      console.log("Connected successfully.");
    }
  } catch (error) {
    console.log("Failed to connect:", error);
  }
};

module.exports = { initializeDatabase };
