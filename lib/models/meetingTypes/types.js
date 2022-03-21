const mongoose = require("mongoose");

const types = new mongoose.Schema({
  type: { type: String, required: true },
});
mongoose.models = {};

let type = mongoose.model("types", types);

export default type;
