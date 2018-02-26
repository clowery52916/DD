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
    product: req.body.product, 
    price: req.body.price, 
    quantity: req.body.quantity
  })

  //saving new cart
  newCart.save().then((savedCart) => {
    console.log(savedCart)
    res.redirect(`/cart/${savedCart._id}`)

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
   product: req.body.products, 
   price: req.body.price,
   quantity: req.body.quantity
  }, {
    new: true
  }).then((updatedCart) => {
    res.redirect(`/cart/${updatedCart._id}`)
  })
})

// destroy cart

router.delete('/:id', (req, res) => {
  Cart.findByIdAndRemove(req.params.id).then(() => {
    res.redirect('/cart')
  })
})


module.exports = router;