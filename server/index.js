const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");  // CORS import

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Middleware
app.use(cors());  // CORS middleware use
app.use(express.json());  // JSON request body parsing

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/requests", require("./routes/requestRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/profiles", require("./routes/profileRoutes"));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
