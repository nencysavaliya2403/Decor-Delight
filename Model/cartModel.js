var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  product_list : {type: mongoose.Schema.Types.ObjectId,ref: "product"} ,
  quantity : {type: Number}
});

module.exports = mongoose.model("cart", cartSchema);