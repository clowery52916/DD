// import { mongo } from 'mongoose';
require('dotenv').config()

const Product = require('../models/product')
const User = require('../models/user')
const Cart = require('../models/cart')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/DD')
const db = mongoose.connection 
db.on('open', () => {
    console.log('connected to mongodb')
})
db.on('error', (err) => {
    console.log(err)
})

//creating new products 

const beer = new Product ({
 product:'Monday Night Brewing, Draft Kilt',  
 price: 3.49, 
 quantity: 1
})

  const wine = new Cart ({
    product: 'Chardonnay', 
    price: 11.99, 
    quantity: 1
  })

const court = new User ({
  name: 'Court', 
  address: [28494, 'hopewell lane '],
  phoneNumber: [4709899087],
  age: 34, 
  products: [ beer, wine]

})
const adam = new User ({
  name: 'Adam', 

})


// remove all stored info on users& create new users 

User.remove().then(() => {
    return User.insertMany([ court, adam ])
  }).then(() => {
    console.log('Saved Successfully')
    db.close()
  }).catch((err) => {
    console.log(err)
    db.close()
  })

  Product.remove().then(() => {
    return Product.insertMany([beer, wine])
  }).then (() => {
    console.log('Success')
    db.close()
  }).catch((err) => {
    console.log(err)
    db.close()
  })