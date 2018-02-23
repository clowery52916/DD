const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
  res.render('', { title: 'Shopping Cart' });
  res.send('this is your cart')
});

router.get('/', (req, res) => {
    res.render('products/new')
    productId: req.params.productId
})

router.post('/', (req, res) =>{

    Product.findById(req.params.productId).then((product) =>{

        const newProduct = new Product ({
            product: req.body.product,
            price: req.body.price,
            picture: req.body.image
      })
    
  
      // Push Soda to company.sodas
      product.cart.push(newProduct)
  
    })
})


module.exports = router