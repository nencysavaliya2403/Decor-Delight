var express = require("express");
var router = express.Router();
var category = require("../Controller/categoryController");
var product = require("../Controller/productController");
var cart = require("../Controller/cartController");
var isLiked = require("../Controller/isLikedController");

// product routes require
router.post("/insertProductData", product.insertProductData);
router.get("/getProductData", product.getProductData);
router.get("/getProductList/:id", product.getProductList);
router.get("/getsingleProduct/:id", product.getsingleProduct);
router.get("/delete_data/:id", product.delete_data);

// category routes for product
router.post("/insertCategoryData", category.insertCategoryData);
router.get("/getCategoryData", category.getCategoryData);

// cart routes for product
router.post("/insertCartData", cart.insertCartData);
router.get("/getcartData", cart.getcartData);
router.delete("/DeleteCart/:id", cart.DeleteCart);

// wishlist routes for product
router.post("/insertLikedData", isLiked.insertLikedData);
router.get("/getLikedData", isLiked.getLikedData);
router.delete("/RemoveLiked/:id", isLiked.RemoveLiked);

module.exports = router;
