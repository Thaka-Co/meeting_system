const mongoose = require("mongoose");
import main from "../../db/connection";
const userData = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Name is required"],
  },
  phone: String,
  profilePic: String,
  tasks: Array,
  meetings: Array,
});

mongoose.models = {};

let Users = mongoose.model("users", userData);

export default Users;
