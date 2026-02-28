import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  usertype: { type: String, default: "user" }
});

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  mainImg: { type: String },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 }
});

export const User = mongoose.model("User", userSchema);
export const Product = mongoose.model("Product", productSchema);
