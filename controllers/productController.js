const express = require('express');
const router = express.Router();

/* GET PRODUCTS page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products' });
});



module.exports = router;