// nodemon start command = npm run servessr
const express = require('express')
require("./db/Conectionstr")
const Emp = require('./db/Employe')
const SignupSchema = require("./db/Signup")
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
// debugger
app.get('/', async (req, resp) => {
   let result = await Emp.find();
   if (result.length > 0) {
      resp.send(result)
   } else {
      resp.send("No record")
   }
})

app.post("/post",async(req,res)=>{
   const result = new Emp(req.body)
   let data = await result.save();
   res.send(data)
})
app.delete("/delete/:id",async(req,res)=>{
   // console.log(req.params.id);
   let result = await Emp.deleteOne({_id : req.params.id})
   res.send(result);
})

app.get("/getone/:id",async(req,res)=>{
    let result = await Emp.findOne({_id : req.params.id})
    if(result){
      res.send(result)
    }
    else{
      res.send("record not found")
    }
})

app.put("/edit/:id",async(req,res)=>{
   let result = await Emp.updateOne({_id : req.params.id},{$set : req.body},)
   res.send(result);
})

// Api for sign up
app.post("/signup",async(req,res)=>{
    let result =  new SignupSchema(req.body)
    let data = await result.save()
    data.toObject();
    delete data.password
    res.send(data);
})

// Api for log in 
app.post("/login",async(req,res)=>{

   if(req.body.email && req.body.password){
   let result =await SignupSchema.findOne(req.body).select("-password");
      if(result){
         res.send(result)
      }
      else{
         res.send("Record not found")
      }
   }else{
      res.send("Record not found")
   }

  
})

app.listen(4000)