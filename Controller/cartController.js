var cartmodel = require('../Model/cartModel');

exports.insertCartData = async (req, res) => {
  var cartData = await cartmodel.create(req.body);
  res.status(200).json({
    cartData
  })
};

exports.getcartData = async (req, res) => {
  var cartData = await cartmodel.find().populate("product_list");
  res.status(200).json({
    cartData
  });
};

exports.DeleteCart = async (req, res) => {
  var id = req.params.id; 
  var cartData  = await cartmodel.findByIdAndDelete(id, req.body);
  var cartData1 = await cartmodel.find().populate("product_list");
  res.status(200).json({
    cartData,
    cartData1,
    status: 'Data deleted successfully'
  });
};