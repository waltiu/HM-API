const mongoose = require('mongoose');
const Intermediary = mongoose.Schema;
const IntermediarySchema = new Intermediary({
  name: {
    type: String,
    unique: true

  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
  numbers: {
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
    default: '中介'
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
  Intermediary: mongoose.model("intermediarys", IntermediarySchema),
}
