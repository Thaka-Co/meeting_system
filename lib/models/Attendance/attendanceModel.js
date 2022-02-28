const mongoose = require("mongoose");

const attendance = new mongoose.Schema({
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "meeting",
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});
module.exports = mongoose.model("attendance", attendance);
