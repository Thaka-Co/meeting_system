const mongoose = require("mongoose");

const votes = new mongoose.Schema({
  type: {
    type: Boolean,
    required: true,
  },
  title: { type: String, required: true, lowercase: true },
  description: { type: String, lowercase: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  down: [{ type: Number }],
  up: [{ type: number }],
  itemId: [{ type: mongoose.Schema.Types.ObjectId, ref: "items" }],
});
module.exports = mongoose.model("votes", votes);
