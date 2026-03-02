const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // ✅ ADD THIS LINE

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // ✅ ADD THIS BLOCK BELOW
    const token = jwt.sign(
      { id: user._id },
      "mysecretkey",
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login Successful",
      token: token
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};