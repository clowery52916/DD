const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Cart = require('./cartSchema')
const productSchema = new Schema({
 product: String, 
 price: Number, 
 picture: String
  //reach goal - insert password
  
})

module.exports = productSchema