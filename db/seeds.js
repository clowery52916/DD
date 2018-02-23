// import { mongo } from 'mongoose';
const Product = require('../models/product')
const User = require('../models/user')
const mongoose = require('mongoose')

//separate from server

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


// remove all old information
User.remove().then(() => {
    return User.remove()
  }).then(() => {
  
    // build out new sodas and companies
    // and save them to the database
    return User.insertMany([ beer ])
  }).then(() => {
    console.log('Saved Successfully')
    db.close()
  }).catch((err) => {
    console.log(err)
    db.close()
  })