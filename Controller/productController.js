var productModel = require("../Model/productModel");


exports.insertProductData = async (req,res) => {   
  var productData = await productModel.create(req.body)
  res.status(200).json({
      productData
  })
}

exports.getProductData = async (req, res) => {
  var productData = await productModel.find().populate("category_id");
  res.status(200).json({
    productData
  });
};

exports.getsingleProduct = async (req, res) => {
  var id = req.params.id;
  var productData = await productModel.findById(id,req.body);
  res.status(200).json({
    productData,
  });
};

exports.delete_data = async (req, res) => {
  var id = req.params.id;
  var productData = await productModel.findByIdAndDelete(id);
  res.status(200).json({
    productData,
    status: "data delete",
  });
};

exports.getProductList = async (req, res) => {
  var id = req.params.id; 
  var productData  = await productModel.find({category_id: id});
  console.log(productData);
  res.status(200).json({
    productData
  })
};