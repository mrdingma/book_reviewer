const express = require("express");
const moviesRoute = require("./movies");

module.exports = () => {
  const router = express.Router();
  router.use("/movies", moviesRoute());
  return router;
};
