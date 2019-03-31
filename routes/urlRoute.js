const express = require("express");
const cors = require("cors");
const router = express.Router();
const body_parser = require("body-parser");
router.use(body_parser.json(), cors());
const uid2 = require("uid2");

const Url = require("../models/urlModel");
let deploy = "https://short-url-chris-bapin.herokuapp.com/";
let local = "http://localhost:3000/";

// Create url
router.post("/create_url/", async (req, res) => {
  try {
    const salt = uid2(5);

    const url = new Url({
      longUrl: req.body.longUrl,
      shortUrl: salt,
      baseShortUrl: deploy + salt,
      visit: req.body.visit,
      salt: salt,
    });

    await url.save();

    res.json({
      id: url._id,
      longUrl: url.longUrl,
      shortUrl: url.shortUrl,
      baseShortUrl: url.baseShortUrl,
      visit: url.visit,
      salt: url.salt,
    });

    console.log(baseShortUrl);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Read url
router.get("/get_url/", async (req, res) => {
  try {
    const url = await Url.find();
    res.json(url);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Update visits
router.post("/update_url/:shortUrl", async (req, res) => {
  try {
    // 1) Récupérer l'objet à modifier depuis la base mongodb
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });
    await console.log(url);
    if (url) {
      // 2) Modifier l'objet

      url.visit = req.body.visit;

      // 3) Sauvegarder l'objet modifié
      await url.save();
      res.json(url);
    } else {
      console.log("ko");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
