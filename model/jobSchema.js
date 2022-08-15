const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    name:String,
    preço:String,
    imageurl:String,
    quantidadeDisp:String,
    descritivo:String
})
  
module.exports = mongoose.model('produto',produtoSchema)