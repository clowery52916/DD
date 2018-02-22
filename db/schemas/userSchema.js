const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  id: String,
  location: String,
  Age: Number, 
  address: String, 
  phoneNumber: []
  //reach goal - insert password
  
})

module.exports = userSchema