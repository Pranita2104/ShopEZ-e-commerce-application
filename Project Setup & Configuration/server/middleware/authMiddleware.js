const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Protect routes (require login)
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, "mysecretkey");

      // Get user from token and attach to request
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Admin middleware (only admin can access)
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // user is admin, allow
  } else {
    res.status(401).json({ message: "Not authorized as admin" });
  }
};

module.exports = { protect, admin };