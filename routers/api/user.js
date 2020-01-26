
const express = require('express');
const router = express.Router();
const User = require('../../models/User')
router.get('/test', (req, res) => {
  res.json({ msg: 'ss' })
})

router.post('/register', (req, res) => {
  console.log(req.body.name)
  User.findOne({ name: req.body.name }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(999)
    console.log(err)
  })
  // User.findOne({ name: req.body.name }).then((user) => {
  //   if (user) {
  //     return res.status(400).json({ msg: '用户名已存在！' })
  //   } else {
  //     const newUser = new User({
  //       name: req.body.name,
  //       email: req.body.email,
  //       password: req.body.password
  //     })
  //     newUser.save().then(user => res.json(user)).catch(err => {
  //       res.json(err)
  //     })
  //   }
  // }).catch(err => res.json(err))
})
module.exports = router;