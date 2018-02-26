const express = require('express');
const router = express.Router();
const Product = require('../models/product')
const User = require('../models/user')
const Cart = require('../models/cart')

/* GET PRODUCTS page. */
router.get('/', (req, res) => {
  console.log('new')

  Product.find().then((products) => {
    res.render('product/index', {
      products: products
    })

  })
})
// //create new page for new products
// router.get('/products', (req, res) => {
//   res.send('new product')
//   res.render('products/')
// })




//create new products 
router.post('/', (req, res) => {

  const newProduct = new Product({
    product: req.body.product,
    price: req.body.price,
    picture: req.body.picture
  })


  

//showing new products 
router.get('/:id', (req, res) => {

  Product.findById(req.params.id).then((product) => {

    res.render('product/edit', {
      product: product //product show page
    })
  })
})

newProduct.save().then((savedProduct) => {
  console.log(savedProduct)
  res.redirect(`/products/${savedProduct._id}`) //

})
})

module.exports = router;