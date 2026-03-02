const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes"); // ✅ add this

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes); // ✅ add this

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/shopez")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Server is Running 🚀");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});