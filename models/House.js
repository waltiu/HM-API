const mongoose = require('mongoose');
const House = mongoose.Schema;
const HouseSchema = new House({
  name: {
    type: String,
    unique: true

  },
  area: {
    type: Number,
  },
  district: {
    type: String,
  },
  saleType: {
    type: String,
  },
  price: {
    type: Number,
  },
  houseType: {
    type: String,
  },
  Intermediary: {
    type: String,
  },
  address: {
    type: String,
  },
  feature: {
    type: Array,
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
    default: '房屋'
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
  House: mongoose.model("house", HouseSchema),
}
