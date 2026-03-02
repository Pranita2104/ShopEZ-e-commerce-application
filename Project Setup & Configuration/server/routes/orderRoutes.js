const express = require("express");
const router = express.Router();
const {
  addOrder,
  getMyOrders,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require("../controllers/orderController");
const { protect, admin } = require("../middleware/authMiddleware");

// Place new order
router.post("/", protect, addOrder);

// Get logged in user's orders
router.get("/myorders", protect, getMyOrders);

// Get all orders (Admin)
router.get("/", protect, admin, getOrders);

// Update order to paid
router.put("/:id/pay", protect, updateOrderToPaid);

// Update order to delivered (Admin)
router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

module.exports = router;