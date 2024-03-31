var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
  category: { type: String },
  categoryimage: { type: String },
});

module.exports = mongoose.model("category", categorySchema);
