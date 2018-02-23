const express = require('express');
const router = express.Router();
const User = require('../models/user')


/* get user page. */
router.get('/', function(req, res) {
    res.send('on userController page')
    User.find().then((users) => {
    res.render('user/index', {
      users:users
    })

    })
   
//create new page for new user
router.get('/new', (req, res) => {
  res.render('user/new')
})
})

//update user information
router.post('/', (req, res) => {
  
  const newUser = new User ({
    name: req.body.name,
    id: req.body.id,
    location: req.body.location,
    Age: req.body.Age, 
    address: req.body.address, 
    phoneNumber: [req.body.phoneNumber]
  }) 

  // router.get('/user/new/:id', (req, res) => {
  //   res.render('/user/new/show')
  // })
  // User.index.push(newUser)

//   return User.save().then((updateUser) => {
//     res.redirect(`/users/${req.params.userId}/index`)
//   })

})

module.exports = router;
