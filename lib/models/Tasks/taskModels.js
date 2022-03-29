const mongoose = require("mongoose");

const tasks = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  cost: { type: Number },
  time: { type: String },
  progress: { type: Number },
  comments: [
    {
      value: { type: String },
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    },
  ],
  // meetingId: { type: mongoose.Schema.Types.ObjectId, ref: "meeting" },
});
mongoose.models = {};
let task = mongoose.model("tasks", tasks);
export default task;
