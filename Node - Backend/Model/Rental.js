const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const RentalSchema = mongoose.Schema({
      carname: {
        type: Schema.Types.ObjectId,
        ref: 'Car'   
      },
      cardailyRentalRate: {
        type: Number,
      },
      dateOut: {
        type: Date,
        required: true,
        default: Date.now
      },
      dateReturned: {
        type: Date,
        default: Date.now
      }
})

const Rental = mongoose.model('Rental', RentalSchema)
module.exports = Rental