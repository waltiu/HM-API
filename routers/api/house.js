
const express = require('express');
const router = express.Router();
const House = require('../../models/House').House

const db = require('../../server')


router.get('/houseSearch', (req, respond) => {
  let query = JSON.parse(JSON.stringify(req.query))

  query.name = { $regex: req.query.name || '' }
  query.village = { $regex: req.query.village || '' }

  if (req.query.feature) {
    query.feature = {
      $all: req.query.feature
    }
  }

  if (req.query.price) {
    let price = JSON.parse(query.price)
    query.price = { $gt: Number(price.from), $lt: Number(price.to) }

  }
  if (req.query.area) {
    let area = JSON.parse(query.area)
    query.area = { $gt: Number(area.from), $lt: Number(area.to) }
  }

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