const mongoose = require('mongoose');
const House = mongoose.Schema;
const HouseSchema = new House({
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
  saleType: {
    type: String,
  },
  price: {
    type: Number,
  },
  layout: {
    type: String,
  },
  face: {
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
  setInfo: {
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
  priceDetail: {
    type: String,
  },
  collectedTime: {
    type: String,
  }, mapInfo: {
    type: Object
  },
  mapCenter: {
    type: Object
  },
  tel: {
    type: String
  },
  village: {
    type: String
  },
  levelDetail: {
    type: Object
  },
  photoInfo: {
    type: Object,
    default: {
      main: '',
      Bedroom: '',
      Kitchen: '',
      saloon: '',
      Toilet: '',
      other: ''
    }
  },
  payType: {
    type: String
  }

})
module.exports = {
  House: mongoose.model("house", HouseSchema),
}
