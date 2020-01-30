const mongoose = require('mongoose');
const Village = mongoose.Schema;
const VillageSchema = new Village({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true

  },
  email: {
    type: String,
    required: true

  },
  time: {
    type: String,
    default: Date.now
  },
  picture: {
    type: String,
    default: 'https://www.baidu.com/link?url=przyPrQVfuVA9XF0L0T6uHmYLmFy7aaq_ubbC9394vsYGZBXxpCQJNctF7sZALe-mqfVBsir88qwjSmSfvO1Oz1bE3B-fQfjQ_QN_Dv58nBODXGUUjBpRP0UWSu3hCio0-a6OnV-HFfYfJOgdQakOZeZJWh3mB0q7SuU2mq74HAEV2xtS7t--qqhJjmF9DqH4frMGZoVh21ss9iONcnkwJYYHf8ifdTgNEU4NCKADQBr2ChciPcPutFDJsNpwxMIZ_heYaR3YtZ2jSh-0gILnxlB57xiWzJgfMKY5IbFNC9VVk7S7GB-seaU1iSiC4oHlyzb7yuyewMwWJ_jFhLh-NkEWGrlWT_VcTCd3DKllzya-ZTDMbilw5FHj4vEGUJzOtanw6_12Hgs-HHli6yfURgs6xp7uVQoD8YeSzxBx7b8D9Sl8FjaeChEV_VWdlLFZbcuUboF6Ru7KaKtwj4pcf5nkHhG7FSexJuGYIkxlZxd5EfRaHobjagRLHHNzTKpE6s9dC7CrQ2fMFvPwLJafNK7k0n06UYCFk9G-KDyuMMKozuaD3Q6tKyBgFShU71c-oDnpQTdxYxPDV_NAodDv-cgc2PnJIMWhK8cE0gzrcqx_PMukxbOV5RRnYXqrpaZ8QbP6fRt2CTWWAHHfwmXGq&timg=&click_t=1580373688455&s_info=1519_674&wd=&eqid=eca8c2dc0006bf27000000035e329467'
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
