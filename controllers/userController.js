const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Cart = require('../models/cart')
const Product = require('../models/product')

router.get('/', (req, res) => {
  console.log('new')

  User.find().then((users) => {
    res.render('user/index', {
      users: users
    })

  })
})
//create new page for new user
router.get('/new', (req, res) => {
  res.send('new user')
  res.render('user/new')
})




//create new user 
router.post('/', (req, res) => {

  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    product: [req.body.product]
  })

  //saving new user
  newUser.save().then((savedUser) => {
    console.log(savedUser)
    res.redirect(`/users/${savedUser._id}`)

  })
})

//showing new user
router.get('/:id', (req, res) => {

  User.findById(req.params.id).then((user) => {

    res.render('user/show', {
      user: user
    })
  })


})
//edit user 
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.render('user/edit', {
      id: req.params.id,
      user: user
    })
  })
})


//update user 

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    phoneNumber: req.body.phoneNumber,
    products: req.body.products
  }, {
    new: true
  }).then((updatedUser) => {
    res.redirect(`/users/${updatedUser._id}`)
  })
})

// destroy user

router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/users')
  })
})


module.exports = router;