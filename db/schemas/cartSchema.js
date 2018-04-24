const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = require('./productSchema')
const userSchema = require('./userSchema')
const cartSchema = new Schema({
  price: [
    String, Number
  ],
  quantity: Number,
  products: [productSchema]
})

module.exports = cartSchema
