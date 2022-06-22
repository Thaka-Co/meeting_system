const mongoose = require("mongoose");

const status = new mongoose.Schema({
  value: { type: String, required: [true, "enter the value"] },
  // meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "meeting" },
});
mongoose.models = {};
let stat = mongoose.model("status", status);
export default stat;
