const express = require("express");
const { getDb } = require("../db");
const config = require("../config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const fruits = await db
      .collection(config.collectionName)
      .find({})
      .sort({ _id: 1 })
      .toArray();

    res.status(200).json(fruits);
  } catch (error) {
    console.error("Failed to fetch fruits:", error.message);
    res.status(500).json({ error: "Failed to fetch fruits" });
  }
});

module.exports = router;