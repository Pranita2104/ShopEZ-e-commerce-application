# 🚀 Project Setup & Execution Guide

Follow the steps below to run the project locally.

---

## 🖥️ Step 1: Set Up the Frontend (React App)

### 1️⃣ Navigate to the client folder

```bash
cd client
```

### 2️⃣ Install dependencies (if not already installed)

```bash
npm install
```

### 3️⃣ Start the React development server

```bash
npm run dev
```

### 4️⃣ Frontend will run on:

```
http://localhost:5173
```

---

## 🛠️ Step 2: Set Up the Backend (Express Server)

### 1️⃣ Open a new terminal window/tab

### 2️⃣ Navigate to the server folder

```bash
cd server
```

OR (if currently inside client folder)

```bash
cd ../server
```

---

## ⚙️ Step 3: Configure Environment Variables

Inside the **server** folder, create a file named:

```
.env
```

Add the following inside the `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/shopez
PORT=8000
```

Make sure MongoDB is running locally before starting the server.

---

## ▶️ Step 4: Start the Backend Server

Inside the **server** folder, run:

```bash
nodemon index.js
```

OR (if nodemon is not installed)

```bash
npm start
```

---

### ✅ Backend will run on:

```
http://localhost:8000
```

---

## 📌 Important Notes

* Ensure MongoDB is installed and running locally.
* Run frontend and backend in **separate terminals**.
* If you face dependency issues, delete `node_modules` and run `npm install` again.

---

🎉 Your full-stack application should now be running successfully!
