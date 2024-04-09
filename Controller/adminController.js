var adminModel = require("../Model/adminModel");

exports.insertadminData = async (req, res) => {
  var adminData = await adminModel.create(req.body);
  res.status(200).json({
    adminData,
  });
};

exports.getadminData = async (req, res) => {
  var adminData = await adminModel.find();
  res.status(200).json({
    adminData,
  });
};
