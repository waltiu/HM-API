const mongoose = require('mongoose');
const Village = mongoose.Schema;
const VillageSchema = new Village({
  name: {
    type: String,
    required: true,
    unique: true
  },
  area: {
    type: String,
  },
  village: {
    type: String
  },
  city: {
    type: String,
  },
  isSchoolOverArea: {
    type: String,
  },
  district: {
    type: String,
  },
  address: {
    type: String,
  },
  isHosptialOverArea: {
    type: String,
  },
  note: {
    type: String,
  },
  time: {
    type: String,
    default: Date.now
  },
  type: {
    type: String,
    default: '小区'
  },
  collected: {
    type: Boolean,
    default: false
  },
  collectedTime: {
    type: String,
  },
  mapInfo: {
    type: Array
  },
  mapCenter: {
    type: Object
  }
})


const VillageDetail = mongoose.Schema
const villageDetailSchema = new VillageDetail({
  name: {
    type: String,
    required: true
  }
})
module.exports = {
  village: mongoose.model("village", VillageSchema)
}
