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
    default: 4
  },
  collected: {
    type: Boolean,
    default: false
  }
})
module.exports = {
  School: mongoose.model("school", SchoolSchema),
}
