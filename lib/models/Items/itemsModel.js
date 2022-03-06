const mongoose = require("mongoose");

const items = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: { type: String, lowercase: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "attachments" }],
  meetingId: [{ type: mongoose.Schema.Types.ObjectId, ref: "meeting" }],
  isDelayed: Boolean,
});
mongoose.models = {};
let item = mongoose.model("items", items);
export default item;
