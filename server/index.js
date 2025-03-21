const express = require ("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const menuRoutes = require("./router/menuRouter")
const app = express();
app.use(express.json());
app.use(cors( {origin: ["http://localhost:5173", "https://deepnetassignment-1.onrender.com/"], 
    methods: "GET,POST,PUT,DELETE"}));

connectDB();


app.use("/api", menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
