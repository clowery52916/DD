const express = require('express');
const router = express.Router();
const Product = require('../models/product')

/* GET PRODUCTS page. */
router.get('/', function(req, res, next) {
    res.send('on productController page')
  res.render('', { title: 'Products' });
});

router.get('./new', (req, res) => {
    res.send('Testing new Product Page')
    res.render('products')


});
 
router.get('./new/:id', (req, res) => {
    res.send('this is id page for products')
    res.render('products/show')
})


module.exports = router;