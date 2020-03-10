const mongoose = require('mongoose');
const Hospital = mongoose.Schema;
const HospitalSchema = new Hospital({
  name: {
    type: String,
    unique: true

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
    default: '医院'
  },
  collected: {
    type: Boolean,
    default: false
  },
  collectedTime: {
    type: String,
  }, mapInfo: {
    type: Object
  },
  mapCenter: {
    type: Object
  },
  url: {
    type: String
  }
})
module.exports = {
  Hospital: mongoose.model("hospital", HospitalSchema),
}
