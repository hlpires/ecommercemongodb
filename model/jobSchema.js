const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    name:String ,
    price:String,
    imageurl:String,
    quantidadeDisp:String,
    descritivo:String
})


  
module.exports = mongoose.models.produto || mongoose.model('produto',produtoSchema)