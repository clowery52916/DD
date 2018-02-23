const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = require('./productSchema')
const userSchema = new Schema({
  name: String,
  age: Number, 
  address: String,
  products: [ productSchema ] 
  // id: String,
  // location: String,
 
  // phoneNumber: []
  //reach goal - insert password
  
})

module.exports = userSchema