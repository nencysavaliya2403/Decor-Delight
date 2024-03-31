var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  title: { type: String },
  images: { type: Array },
  productimage: { type: String },
  description: { type: String },
  color: { type: String },
  material: { type: String },
  instruction: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  }
});

module.exports = mongoose.model("product", productSchema);
