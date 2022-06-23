const mongoose = require('mongoose')

const TypeSchema = mongoose.Schema({
    name:{
        type:String,
    }
})

const Type = mongoose.model('Type', TypeSchema)
module.exports = Type