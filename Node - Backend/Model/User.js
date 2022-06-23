const mongoose = require('mongoose')
var Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
      name: {
        type: String,
        },
      email: {
        type: String,
        
      },
      password: {
        type: String,
        
      },
      isAdmin: {
        type: Boolean,
        default: false
      },
      carRentType:{
        type: Schema.Types.ObjectId,
        ref:'Rental'      
      }
    });
const User = mongoose.model('User', UserSchema)
module.exports = User