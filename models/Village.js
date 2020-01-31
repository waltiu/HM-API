const mongoose = require('mongoose');
const Village = mongoose.Schema;
const VillageSchema = new Village({
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  lng: {
    type: String,
  },
  lat: {
    type: String,
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
  village: mongoose.model("village", VillageSchema),
  villageDetail: mongoose.model('villagedetail', villageDetailSchema)
}