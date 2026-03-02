const Product = require("../models/Product");

// 🟢 Add Product (Admin Only)
exports.addProduct = async (req, res) => {
  try {
    const { name, price, description, countInStock } = req.body;

    const product = new Product({
      name,
      price,
      description,
      countInStock
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 🟢 Get All Products (Public)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 🟢 Update Product by ID (Admin Only)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.description = req.body.description || product.description;
      product.countInStock = req.body.countInStock || product.countInStock;

      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 🟢 Delete Product by ID (Admin Only)
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.status(200).json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};