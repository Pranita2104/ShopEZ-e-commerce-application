const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

// Add Product (Admin Only)
router.post("/", protect, admin, addProduct);

// Get All Products (Public)
router.get("/", getProducts);

// Update Product by ID (Admin Only)
router.put("/:id", protect, admin, updateProduct);

// Delete Product by ID (Admin Only)
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;