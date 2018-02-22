const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DD' });
});
//
router.get('/new', (req, res) => {
  res.render('users/new')
})




module.exports = router;
