
const express = require('express');
const router = express.Router();
const Village = require('../../models/Village').village
const VillageDetail = require('../../models/Village').villageDetail

const db = require('../../server')

router.get('/villageList', (req, respond) => {
  Village.find().then(res => {
    respond.json(
      {
        status: 200,
        data: res
      }
    )
  })
})
router.get('/villageSearch', (req, respond) => {
  Village.find(req.body).then(res => {
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
module.exports = router;