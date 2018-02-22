const mongoose = require('mongoose')
const cartSchema = require('./cartSchema')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise
const cartSchema = new Schema({
 products: [ productSchema ], 
 quantity: Number, 
 price: Number, 
 removeItem: String

  //reach goal - insert password
  
})
cartSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
  
    if (!this.created_at) { this.created_at = now; }
    next();
  });
  
  var cartModel = mongoose.model('Cart', cartSchema);
  
  module.exports = {
    Cart: cartModel
  }



module.exports = {
    Cart: cartModel
}