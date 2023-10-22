
const mongoose = require('mongoose')


const signupSchema = new mongoose.Schema({
    name : String,
    surname : String,
    mobileno : String,
    email : String,
    password : String
})

module.exports = mongoose.model("users",signupSchema)