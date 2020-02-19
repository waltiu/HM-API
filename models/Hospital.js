const mongoose = require('mongoose');
const Hospital = mongoose.Schema;
const HospitalSchema = new Hospital({
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  district: {
    type: String,
  },
  HospitalType: {
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
  Hospital: mongoose.model("hospital", HospitalSchema),
}
