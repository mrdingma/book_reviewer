const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const controllers = require("./controllers");

const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/search/:text", controllers.search.get);

// app.post("/movies/:movieId", controllers.movies.save);

// app.get("/movies", controllers.movies.getAll);

app.listen(PORT, () => console.log("Listening on port: " + PORT));
