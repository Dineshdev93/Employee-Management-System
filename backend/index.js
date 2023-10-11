// nodemon start command = npm run servessr
const express = require('express')
require("./db/Conectionstr")
const Emp = require('./db/Employe')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
// debugger
app.get('/',async(req, resp) => {
   let result = await Emp.find();
   if(result.length > 0){
      resp.send( result)
   } else{
      resp.send( "No record")
   }
   
   // console.log(result);
   
})

app.listen(4000)