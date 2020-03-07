
const express = require('express');
const router = express.Router();
const Village = require('../../models/Village').village
const VillageDetail = require('../../models/Village').villageDetail

const db = require('../../server')


router.get('/villageSearch', (req, respond) => {
  let query = req.query
  query.name = { $regex: req.query.name || '' }
  Village.find(query).then(res => {
    respond.json(
      {
        status: 200,
        data: res
      })

  })
})
router.get('/villageDetail', (req, respond) => {
  VillageDetail.findOne().then(res => {
    respond.json(
      {
        status: 200,
        data: res
      }
    )
  })
})
router.post('/villageSave', (req, respond) => {
  new Village(req.body).save().then(res => {
    respond.json({
      status: 200,
      message: '新建成功！',
      data: res
    })
  }).catch(err => {
    respond.json({
      status: 500,
      message: '新建失败,数据名称已存在！'
    })

  })

})
router.post('/villageDelete', (req, respond) => {
  let a = true
  req.body.map(item => {
    Village.deleteMany({ name: item.name }).then(
      a = a && true
    ).catch(a = a && true)
  })

  if (a) {
    respond.json({
      status: 200,
      message: '删除成功！',
    })
  } else {
    respond.json({
      status: 400,
      message: '删除失败',
    })
  }

  // const newVillage = new Village(req.body)
  // newVillage.save().then(res => {
  //   respond.json({
  //     status: 200,
  //     message: '注册成功，请登录！',
  //     data: res
  //   })
  // }).catch(err => {
  //   respond.json({
  //     status: 500,
  //     message: '注册失败,用户名已存在'
  //   })

  // })
})
router.post('/villageUpate', (req, respond) => {
  const updateVillage = new Village(req.body)
  Village.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;