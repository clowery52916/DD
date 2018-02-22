const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* GET PRODUCTS page. */
router.get('/', function(req, res, next) {
    res.send('on userController page')
  res.render('index', { title: 'Users' });
});

// router.get('./new', (req, res) => {
//       res.send('Testing new user Page')
//     res.render('/')


// });
 






// router.post('/', (req, res) => {
//   Product.findById(req.params.productId).then((product) => {

  
//   res.send('new place to update user page')
//   const newUser = new User({
//     name: req.body.name, 
//     id: req.body.id,
//     location: req.body.location,
//     age: req.body.age, 
//     address: req.body.address, 
//     phoneNumber: [ req.body.number ]

//   })
//   user.product.push(newUser)

//   return user.save()
// }).then(updateUser)
// })

module.exports = router;
