const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
})


  
module.exports = mongoose.models.user|| mongoose.model('user',userSchema)