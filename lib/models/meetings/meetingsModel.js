const mongoose = require("mongoose");
const { userData } = require("../user/userModel");

const meetingData = new mongoose.Schema({
  title: String, //
  date: Date, //
  memebers: Array, //
  aginda: Array,
  timeFram: Array, //
  // meetingMinutes: Array,
  isRepated: Number, //
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "rooms" },
  meetingType: { type: mongoose.Schema.Types.ObjectId, ref: "rooms" },
});

module.exports = mongoose.model("meeting", meetingData);
