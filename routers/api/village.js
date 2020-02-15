
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
router.post('/villageUpate', (req, respond) => {
  const updateVillage = new Village(req.body)
  Village.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;