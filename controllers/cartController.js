const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping Cart' });
});




module.exports = router;