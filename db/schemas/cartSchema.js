const mongoose = require('mongoose')
const productSchema = require('./productSchema')
const Schema = mongoose.Schema

const cartSchema = new Schema({
 products: [ productSchema ], 
 quantity: Number, 
 price: Number, 
 removeItem: String

  //reach goal - insert password
  
})

module.exports = cartSchema