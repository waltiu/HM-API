const mongoose = require('mongoose');
const House = mongoose.Schema;
const HouseSchema = new House({
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  district: {
    type: String,
  },
  saleType: {
    type: String,
  },
  price: {
    type: String,
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
    default: 2
  },
  collected: {
    type: Boolean,
    default: false
  }
})
module.exports = {
  House: mongoose.model("house", HouseSchema),
}
