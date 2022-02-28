const mongoose = require("mongoose");

const attachments = new mongoose.Schema({
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "meeting",
  },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
  file: { type: Buffer },
});
module.exports = mongoose.model("attachments", attachments);
