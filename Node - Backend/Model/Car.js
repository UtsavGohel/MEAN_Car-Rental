const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const CarSchema = mongoose.Schema({
    name: {
     type:String
    },
    brand:{
     type: Schema.Types.ObjectId,
     ref: 'Brand'   
    },
    type:{
     type:Schema.Types.ObjectId,
     ref:'Type'
    },
    numberOfSeats: {
        type: Number,
    },
    numberOfDoors: {
        type: Number,
    },
    numberInStock: {
        type: Number,
    },
    dailyRentalRate: {
        type: Number,
    }
})

const Car = mongoose.model('Car', CarSchema)
module.exports = Car