const mongoose = require("mongoose");
import votes from "../../models/Votes/votesModel";
const items = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: { type: String, lowercase: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "attachments" }],
  meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "meeting" },
  isDelayed: { type: Boolean, default: false },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: votes }],
});
mongoose.models = {};
let item = mongoose.model("items", items);
export default item;
