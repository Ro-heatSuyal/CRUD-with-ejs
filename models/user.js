const mongoose = require("mongoose")
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    image:String
}) 

module.exports=mongoose.model("user",userSchema);