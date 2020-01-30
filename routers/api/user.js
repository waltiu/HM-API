
const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const db = require('../../server')
router.get('/test', (req, res) => {
  res.json({ msg: 'ss' })
})
router.get('/login', (req, respond) => {
  User.findOne({ name: req.body.name }).then(res => {
    if (res) {
      if (res.password === req.body.password) {
        respond.json({
          status: 200,
          message: '登录成功，欢迎使用！',
          data: res
        })
      } else {
        respond.json({
          status: 500,
          message: '登录失败，密码错误！',
          data: res
        })
      }
    } else {
      respond.json({
        status: 500,
        message: '登录失败，用户名不存在！',
        data: res
      })
    }
  })

})
router.post('/register', (req, respond) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password
  })
  newUser.save().then(res => {
    respond.json({
      status: 200,
      message: '注册成功，请登录！',
      data: res
    })
  }).catch(err => {
    respond.json({
      status: 500,
      message: '注册失败,用户名已存在'
    })

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