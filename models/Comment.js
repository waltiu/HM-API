const mongoose = require('mongoose');
const Comment = mongoose.Schema;
const CommentSchema = new Comment({
  _id: {
    type: String
  },
  info: {
    type: Array,
  },


})
module.exports = {
  Comment: mongoose.model("comment", CommentSchema),
}
