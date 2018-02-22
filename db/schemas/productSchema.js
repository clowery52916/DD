const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
 product: String, 
 price: Number, 
 picture: Image
  //reach goal - insert password
  
})

module.exports = productSchema