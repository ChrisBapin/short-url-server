require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const urlRoute = require("./routes/urlRoute");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.use(body_parser.json(), urlRoute, cors(), helmet(), compression());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/short-url", {
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

app.get("/", (req, res) => {
  res.json("Welcome On API short url!");
});

// SERVER
app.listen(process.env.PORT || 8080, () => {
  console.log("Server started");
});
