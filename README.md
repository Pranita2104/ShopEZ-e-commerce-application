# 🛒 SHOPEZ – E-Commerce Application

A full-stack MERN e-commerce application with authentication, product listings, cart management, checkout, and admin dashboard.

---

## 🚀 Features

### 1️⃣ Comprehensive Product Catalog
SHOPEZ provides an extensive catalog of products, offering a diverse range of items and options for shoppers.

### 2️⃣ Shop Now Button
Each product listing includes a convenient **"Shop Now"** button for quick purchasing.

### 3️⃣ Order Details Page
Upon clicking the **"Shop Now"** button, users are redirected to an order details page displaying complete product information.

### 4️⃣ Secure & Efficient Checkout
SHOPEZ ensures a secure and smooth checkout process with proper authentication and order validation.

### 5️⃣ Order Confirmation
After successfully placing an order, users receive a confirmation notification with order details.

---

## 👥 Roles and Responsibilities

### 👤 User
- Register and login to the platform  
- Browse products  
- Add products to cart  
- Place orders  
- View order history  

### 🛠️ Admin
- Manage banner images  
- Manage product categories  
- Add, update, and delete products  
- Monitor orders  

---

## 🗂️ Database Collections

### 📦 Products
Stores all products available on the platform.

### 🛒 Cart
Stores products added to the cart by users.  
Each cart is differentiated using the **User ID**.

### 📑 Orders
Stores all orders placed by users.

### 👥 Users
Stores registered user details including authentication data.

---

## 🏗️ Architecture Overview

This project follows a **Three-Tier Architecture**:

- 🎨 Frontend – React.js  
- ⚙️ Backend – Node.js + Express.js  
- 🗄️ Database – MongoDB  

---

## 🔐 Security Features

- JWT Authentication  
- Password Hashing using Bcrypt  
- Protected Routes  
- Role-Based Access (Admin/User)

---
