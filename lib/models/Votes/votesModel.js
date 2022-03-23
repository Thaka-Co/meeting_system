const mongoose = require("mongoose");

const votes = new mongoose.Schema({
  type: {
    type: Boolean,
    required: true,
  },
  title: { type: String, required: true, lowercase: true },
  description: { type: String, lowercase: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  down: { type: Number },
  up: { type: Number },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
});
mongoose.models = {};

let vote = mongoose.model("votes", votes);

export default vote;
