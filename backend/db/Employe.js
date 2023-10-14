
const mongoose = require('mongoose')

const employe = new mongoose.Schema({
    date : String,
    employee : String,
    level : String,
    post : String,
    salary : String,
    email : String,
    city : String,
    pinno : String
})
  module.exports = mongoose.model("empdatas" , employe);