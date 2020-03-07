const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const routeHandler = require("./routes");

const PORT = process.env.PORT || 3000;

// set up db connection
mongoose.connect(config.mongodb.dsn, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/dist")));

// app.use('/', routeHandler());

app.listen(PORT, () => console.log("Listening on port: " + PORT));
