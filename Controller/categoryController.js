var categoryModel = require("../Model/categoryModel");

exports.insertCategoryData = async (req, res) => {
  var categoryData = await categoryModel.create(req.body);
  res.status(200).json({
    categoryData,
  });
};

exports.getCategoryData = async (req, res) => {
  var categoryData = await categoryModel.find();
  res.status(200).json({
    categoryData,
  });
};
