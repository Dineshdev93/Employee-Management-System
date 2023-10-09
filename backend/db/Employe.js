
const mongoose = require('mongoose')

const employe = new mongoose.Schema({
    emp : String,
    post : String,
    email : String,
    salary : String,
    vill : String
})
  module.exports = mongoose.model("empdatas" , employe);