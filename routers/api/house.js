
const express = require('express');
const router = express.Router();
const House = require('../../models/House').House

const db = require('../../server')


router.get('/houseSearch', (req, respond) => {
  let query = req.query
  query.name = { $regex: req.query.name || '' }
  House.find(query).then(res => {
    respond.json(
      {
        status: 200,
        data: res
      })

  })
})

router.post('/houseUpate', (req, respond) => {
  const updateHouse = new House(req.body)
  House.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;