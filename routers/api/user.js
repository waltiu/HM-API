
const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const db = require('../../server')
router.get('/test', (req, res) => {
  res.json({ msg: 'ss' })
})

router.post('/register', (req, respond) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password
  })

  newUser.save().then(res => {
    respond.json(res)
  }).catch(err => {
    respond.json(err)

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