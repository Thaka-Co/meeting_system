const mongoose = require("mongoose");
const { userData } = require("../user/userModel");

const meetingData = new mongoose.Schema({
  id:{type:mongoose.Schema.Types.ObjectId},
  topic: String,
  date: Date,
  memebers: Array,
  aginda: Array, //items ?
  timeFram: Number,
  meetingMinutes: Array,
  isRepated: Boolean,
  // roomId
});

module.exports = mongoose.model("meeting", meetingData);
