var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("Admin", adminSchema);