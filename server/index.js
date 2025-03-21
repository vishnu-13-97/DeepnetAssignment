const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const menuRoutes = require("./router/menuRouter");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: ["http://localhost:5173", "https://deepnetassignment-1.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Connect to the database
connectDB();

// Routes
app.use("/api", menuRoutes);

// Set up server to listen on a specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
