const mongoose = require("mongoose");

const rooms = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  size: { type: Number },
  tools: [{ type: Array }],
  meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "meeting" },
});
module.exports = mongoose.model("rooms", rooms);
