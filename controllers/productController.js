const express = require('express');
const router = express.Router();

/* GET PRODUCTS page. */
router.get('/', function(req, res, next) {
    res.send('on new page')
  res.render('index', { title: 'Products' });
});

router.get('/new', (req, res) => {
    res.send('product/new')
})



module.exports = router;