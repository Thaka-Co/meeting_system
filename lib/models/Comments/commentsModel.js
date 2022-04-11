const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  value: { type: String },
});
module.exports = mongoose.model("comment", comment);
