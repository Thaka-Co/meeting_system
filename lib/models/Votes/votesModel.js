const mongoose = require("mongoose");

const votes = new mongoose.Schema({
  type: {
    type: Boolean,
    required: [true, "type is required"],
  },
  title: {
    type: String,
    required: [true, "title is required"],
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    lowercase: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  down: { type: Number },
  up: { type: Number },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "items" },
});
mongoose.models = {};

let vote = mongoose.model("votes", votes);

export default vote;
