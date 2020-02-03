const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  data: {
    type: String,
    default: Date.now
  },
  picture: {
    type: String,
    default: '112 '
  },
  token: {
    type: String
  },
  permission: {
    type: String
  },
  userInfo: {
    type: String
  }
})
module.exports = mongoose.model("user", UserSchema)