
const express = require('express');
const router = express.Router();
const School = require('../../models/Shcool').School

const db = require('../../server')


router.get('/schoolSearch', (req, respond) => {
  let query = req.query
  query.name = { $regex: req.query.name || '' }
  School.find(query).then(res => {
    respond.json(
      {
        status: 200,
        data: res
      })

  })
})

router.post('/schoolUpate', (req, respond) => {
  const updateSchool = new School(req.body)
  School.update({ name: req.body.name }, { $set: req.body }).then(res => {
    respond.json(res)
  })
})
module.exports = router;