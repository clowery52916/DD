const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
 product: [], 
 quantity: Number, 
 price: Number, 
 removeItem: String

  //reach goal - insert password
  
})

module.exports = cartSchema