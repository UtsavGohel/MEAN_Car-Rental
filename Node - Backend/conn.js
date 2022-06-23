const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://localhost:27017/cartest',
 { useNewUrlParser: true }).then(
    ()=>{
        console.log('connected to mongodb')
    }
)

module.exports = conn;