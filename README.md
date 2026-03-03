Steps For Execution
Step 1: Set Up the Frontend (React App)

a) Open a terminal and navigate into the client folder:

cd client

b) Install dependencies (if not installed):

npm install

c) Start the React development server:

npm run dev

d) The app should now be running on:

http://localhost:5173
Step 2: Set Up the Backend (Express Server)

a) Open a new terminal tab/window.

b) Navigate into the server folder:

cd ../server

OR

cd server
Step 3: Configure Environment Variables

Inside the server folder, create a new file named:

.env

In that .env file, add your MongoDB connection string:

MONGO_URI=mongodb://localhost:27017/shopez
PORT=8000
Step 4: Start the Backend Server

Inside the same server folder, run:

nodemon index.js

OR (if nodemon not installed):

npm start

The server should start on:

http://localhost:8000
