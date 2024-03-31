var isLikedModel = require('../Model/isLikedModel');

exports.insertLikedData = async (req, res) => {
  var LikedData = await isLikedModel.create(req.body);
  res.status(200).json({
    LikedData
  })
};

exports.getLikedData = async (req, res) => {
  var LikedData = await isLikedModel.find().populate("product_list");
  res.status(200).json({
    LikedData
  });
};

exports.RemoveLiked = async (req, res) => {
  var id = req.params.id; 
  var LikedData  = await isLikedModel.findByIdAndDelete(id, req.body);
  var LikedData1 = await isLikedModel.find().populate("product_list");
  res.status(200).json({
    LikedData,
    LikedData1,
    status: 'Data deleted successfully'
  });
};