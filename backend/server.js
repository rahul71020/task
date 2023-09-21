const express=require('express')
const userRouter = require("./Routes") 
const connect = require("./db/index") 
connect();
const app=express()
app.use(express.json());
const dotenv = require("dotenv");
const port=1111
var cors = require('cors')
app.use(cors())


app.use("/", userRouter); 
app.listen(port,()=>{
    console.log(`run on port no ${port}`)
})