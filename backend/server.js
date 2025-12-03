const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const spendRoutes = require("./routes/spend");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());            
app.use(express.json());    

// Basic health-check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Cloud Spend Viewer API is running" });
});

// Main spend API route
app.use("/api/spend", spendRoutes);

// Fallback error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// Start API server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;
