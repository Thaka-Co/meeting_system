const mongoose = require("mongoose");

const rooms = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  size: { type: Number },
  tools: [{ type: String }],
  // meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "meeting" },
});
mongoose.models = {};
let room = mongoose.model("rooms", rooms);
export default room;
