const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    password:String,
})


  
module.exports = mongoose.models.user|| mongoose.model('user',userSchema)