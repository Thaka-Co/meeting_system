const mongoose = require("mongoose");

const types = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
});
mongoose.models = {};

let type = mongoose.model("types", types);

export default type;
// module.exports = mongoose.model("types", types);
