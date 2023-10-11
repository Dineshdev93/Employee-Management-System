
const mongoose = require('mongoose')

const employe = new mongoose.Schema({
    employee : String,
    level : String,
     salary : String,
    email : String,
    city : String,
    Pinno : String
})
  module.exports = mongoose.model("empdatas" , employe);