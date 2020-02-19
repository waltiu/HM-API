const mongoose = require('mongoose');
const School = mongoose.Schema;
const SchoolSchema = new School({
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  district: {
    type: String,
  },
  schoolType: {
    type: String,
  },
  form: {
    type: String,
  },


  address: {
    type: String,
  },
  time: {
    type: String,
    default: Date.now
  },
  type: {
    type: String,
    default: '学校'
  },
  collected: {
    type: Boolean,
    default: false
  },
  collectedTime: {
    type: String,
  }
})
module.exports = {
  School: mongoose.model("school", SchoolSchema),
}