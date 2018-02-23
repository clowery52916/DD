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
 picture: 'https://imgur.com/a/7eyhm'
})
const wine = new Product ({
  product: 'Robert Mondavi Cabernet', 
  price: 12.99, 

})
const court = new User ({
  name: 'Court', 

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