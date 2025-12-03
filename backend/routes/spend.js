const express = require("express");
const path = require("path");
const { filterSpendData } = require("../utils/filterData");

const router = express.Router();

// Load dataset once at server startup
const dataPath = path.join(__dirname, "..", "data", "sample-data.json");
const spendData = require(dataPath);

// GET /api/spend → returns filtered spend data
router.get("/", (req, res) => {
  try {
    const { cloud, team, env, month } = req.query;

    const filtered = filterSpendData(spendData, {
      cloud,
      team,
      env,
      month,
    });

    res.json(filtered);
  } catch (err) {
    console.error("Error in /api/spend:", err);
    res.status(500).json({ message: "Failed to load spend data" });
  }
});

module.exports = router;
