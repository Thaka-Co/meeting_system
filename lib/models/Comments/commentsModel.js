const mongoose = require("mongoose");

const comments = new mongoose.Schema({
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  value: { type: String },
});
// module.exports = mongoose.model("comment", comments);
mongoose.models = {};
let comment = mongoose.model("comment", comments);
export default comment;
