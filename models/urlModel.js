const mongoose = require("mongoose");

const Url = mongoose.model("Url", {
  longUrl: {
    type: String,
    unique: true,
  },
  shortUrl: {
    type: String,
  },
  visit: {
    type: String,
  },
  hash: String,
  salt: String,
});

module.exports = Url;
