import { mongo } from 'mongoose';

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


