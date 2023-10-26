const mongoose = require("mongoose");
const color = require('colors')
const Connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://dineshsharmadev93:dinesh@cluster0.klg6cfm.mongodb.net/employee?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log(`Mongodb Connected Succesfully`.bgMagenta);
  } catch (error) {
    console.error(`Mongodb not connected ${error}`.bgRed);
    process.exit(1);
  }
};

module.exports = Connectdb
