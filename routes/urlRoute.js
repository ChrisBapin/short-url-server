const express = require("express");
const cors = require("cors");
const router = express.Router();
const body_parser = require("body-parser");
router.use(body_parser.json(), cors());
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

const Url = require("../models/urlModel");

// Create url
router.post("/create_url", async (req, res) => {
  try {
    const salt = uid2(5);
    const hash = SHA256(salt).toString(encBase64);

    const url = new Url({
      longUrl: req.body.longUrl,
      shortUrl: salt,
      visit: req.body.visit,
      hash: hash,
      salt: salt,
    });

    await url.save();

    res.json({
      id: url._id,
      longUrl: url.longUrl,
      shortUrl: url.shortUrl,
      visit: url.visit,
      hash: url.hash,
      salt: url.salt,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Read url
router.get("/get_url", async (req, res) => {
  try {
    const url = await Url.find();
    res.json(url);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
