
const express = require('express');
const router = express.Router();
const Village = require('../../models/Village').village
const VillageDetail = require('../../models/Village').villageDetail

const db = require('../../server')


router.get('/villageSearch', (req, respond) => {
  console.log(req.query)
  Village.find(req.query).then(res => {
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