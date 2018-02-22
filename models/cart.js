const mongoose = require('mongoose')
const cartSchema = require('../db/schemas/cartSchema')

const Cart = mongoose.model('cart', cartSchema)

module.exports = Cart