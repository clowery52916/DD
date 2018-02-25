const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Cart = require('../models/cart')
const Product = require('../models/product')

router.get('/', (req, res) => {
  console.log('new')

  Cart.find().then((items) => {
    res.render('cart/index', {
      items: items
    })

  })
})
//create new page for new cart items
router.get('/new', (req, res) => {
  res.send('new item')
  res.render('cart/new')
})




//create new cart 
router.post('/', (req, res) => {

  const newCart = new Cart({
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    product: [req.body.product]
  })

  //saving new cart
  newCart.save().then((savedCart) => {
    console.log(savedCart)
    res.redirect(`/items/${savedCart._id}`)

  })
})

//showing new cart
router.get('/:id', (req, res) => {

  Cart.findById(req.params.id).then((cart) => {

    res.render('cart/show', {
      cart: cart
    })
  })


})
//edit cart 
router.get('/:id/edit', (req, res) => {
  Cart.findById(req.params.id).then((cart) => {
    res.render('cart/edit', {
      id: req.params.id,
      cart: cart
    })
  })
})


//update cart 

router.put('/:id', (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    age: req.body.age,
    phoneNumber: req.body.phoneNumber,
    products: req.body.products
  }, {
    new: true
  }).then((updatedCart) => {
    res.redirect(`/items/${updatedCart._id}`)
  })
})

// destroy cart

router.delete('/:id', (req, res) => {
  Cart.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/items')
  })
})


module.exports = router;