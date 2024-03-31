var mongoose = require('mongoose');

var isLikedSchema = new mongoose.Schema({
  product_list : {type: mongoose.Schema.Types.ObjectId,ref: "product"} ,
});

module.exports = mongoose.model("wishlist", isLikedSchema);