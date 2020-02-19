const mongoose = require('mongoose');
const Intermediary = mongoose.Schema;
const IntermediarySchema = new Intermediary({
  name: {
    type: String,
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
    default: 5
  },
  collected: {
    type: Boolean,
    default: false
  }
})
module.exports = {
  Intermediary: mongoose.model("intermediarys", IntermediarySchema),
}
