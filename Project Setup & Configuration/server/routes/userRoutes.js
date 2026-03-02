const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware"); // ✅ ADD THIS

router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ PROTECTED ROUTE
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;