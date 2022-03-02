const mongoose = require("mongoose");
import main from '../../db/connection'
const userData = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  profilePic: String,
  tasks: Array,
  meetings: Array,
});

mongoose.models = {};

var Users = mongoose.model('users', userData);


export default Users;