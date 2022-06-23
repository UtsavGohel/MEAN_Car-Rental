const mongoose = require('mongoose')
const BrandSchema = mongoose.Schema({
    brandname: String
  })
const Brand = mongoose.model('Brand', BrandSchema)
module.exports = Brand  