const mongoose = require("mongoose");
const { userData } = require("../user/userModel");

const meetingData = new mongoose.Schema({
  title: String, //
  date: Date, //
  memebers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }], //
  aginda: Array,
  timeFram: Array, //
  // meetingMinutes: Array,
  isRepated: Number, //
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "rooms" },
  meetingType: { type: mongoose.Schema.Types.ObjectId, ref: "types" },
});
mongoose.models = {};

let meeting = mongoose.model("meeting", meetingData);

export default meeting;
// module.exports = mongoose.model("meeting", meetingData);
