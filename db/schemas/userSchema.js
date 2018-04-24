const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = require('./productSchema')
const userSchema = new Schema({
  name: String,
  address: [
    String, Number
  ],
  age: Number,
  phoneNumber: Number,
  products: [productSchema]
})

module.exports = userSchema
