const mongoose = require("mongoose")

const userJobSchema = new mongoose.Schema({
    name:String,
    email:String,
    job:{
        elo:String,   
        duo:Boolean,    
        discord:Boolean,   
        elofinal:String
    }
})
  
module.exports = mongoose.model('usuariosJobs',userJobSchema)