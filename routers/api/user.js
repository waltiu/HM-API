
const express = require('express');
const router = express.Router();
const User = require('../../models/User')
router.get('/test', (req, res) => {
  res.json({ msg: 'ss' })
})

router.post('/register', (req, res) => {
  const db = require('../../server')
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  db.collection('user').insertOne(newUser).then(res => {
    console.log(res)
  })

  // User.findOne({ name: req.body.name }).then((user) => {
  //   if (user) {
  //     return res.status(400).json({ msg: '用户名已存在！' })
  //   } else {
  //  
  //     })
  //     newUser.save().then(user => res.json(user)).catch(err => {
  //       res.json(err)
  //     })
  //   }
  // }).catch(err => res.json(err))
})
module.exports = router;