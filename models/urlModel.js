const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  longUrl: {
    type: String,
    unique: true,
  },
  shortUrl: {
    type: String,
  },
  baseShortUrl: {
    type: String,
  },
  visit: {
    type: String,
    default: 0,
  },
  salt: String,
});

module.exports = Url;
