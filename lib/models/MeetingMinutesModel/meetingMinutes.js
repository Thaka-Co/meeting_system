const mongoose = require("mongoose");

const minutes = new mongoose.Schema({
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  speakers: [
    { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    { time: Number },
  ],
  meetingId: [{ type: mongoose.Schema.Types.ObjectId, ref: "meeting" }],
});
module.exports = mongoose.model("minutes", minutes);
