const mongoose = require("mongoose");

const userData = new mongoose.model({
  name: String,
  email: String,
  password: String,
  phone: Number,
  profilePic: String,
  tasks: Array,
  meetings: Array,
});
