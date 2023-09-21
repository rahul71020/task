const mongoose = require("mongoose")

const mongo_url = "mongodb://0.0.0.0:27017";

 const connect= async ()=>{
   try {
    await mongoose.connect(mongo_url)
    console.log('connected to database')
   } catch (error) {
    console.log('connection failed..!', error)
   }
}
module.exports = connect;