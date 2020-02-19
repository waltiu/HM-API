
const express = require('express');
const router = express.Router();
const Intermediary = require('../../models/Intermediary').Intermediary

const db = require('../../server')


router.get('/IntermediarySearch', (req, respond) => {
  let query = req.query
  query.name = { $regex: req.query.name || '' }
  Intermediary.find(query).then(res => {
    respond.json(
      {
        status: 200,
        data: res
      })

  })
})

router.post('/IntermediaryUpate', (req, respond) => {
  const updateIntermediary = new Intermediary(req.body)
  Intermediary.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;