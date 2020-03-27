
const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment').Comment
console.log(Comment)
const db = require('../../server')


router.get('/getList', (req, respond) => {

  Comment.find({ _id: req.query.id }).then(res => {

    respond.json({
      status: 200,
      message: '获取列表成功',
      data: res
    })

  })
})


router.post('/update', (req, respond) => {
  const newComment = new Comment(req.body)
  Comment.deleteMany({ _id: req.body._id }).then(() => {
    newComment.save().then(res => {
      respond.json({
        status: 200,
        message: '更新成功！',
        data: res
      })
    })
  })


})

module.exports = router;