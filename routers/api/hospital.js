
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

router.post('/hospitalUpate', (req, respond) => {
  const updateHospital = new Hospital(req.body)
  Hospital.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;