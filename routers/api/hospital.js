
const express = require('express');
const router = express.Router();
const Hospital = require('../../models/Hospital').Hospital

const db = require('../../server')


router.get('/hospitalSearch', (req, respond) => {
  let query = req.query
  query.name = { $regex: req.query.name || '' }
  Hospital.find(query).then(res => {
    respond.json(
      {
        status: 200,
        data: res
      })

  })
})
router.post('/hospitalSave', (req, respond) => {
  new Hospital(req.body).save().then(res => {
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
router.post('/hospitalDelete', (req, respond) => {
  let a = true
  req.body.map(item => {
    Hospital.deleteMany({ name: item.name }).then(
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
})
router.post('/hospitalUpate', (req, respond) => {
  const updateHospital = new Hospital(req.body)
  Hospital.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;