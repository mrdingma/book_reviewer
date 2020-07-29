const express = require("express");
const movies_controller = require("../../controllers/movie");

module.exports = () => {
  const router = express.Router();

  router.get("/", async (req, res, next) => {
    try {
      const friend = await movies_controller.addNew(
        req.body.userId,
        req.body.email
      );
      return res.send(friend);
    } catch (err) {
      return next(err);
    }
  });

  // GET friends by userId
  router.get("/user/:userid", async (req, res, next) => {
    try {
      const friends = await movies_controller.getAllByUser(req.params.userid);
      return res.send(friends);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const payload = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
      };

      const movie = await movies_controller.addNew(payload);
      return res.send(movie);
    } catch (err) {
      return next(err);
    }
  });

  router.delete("/user/:userid", async (req, res, next) => {
    try {
      const deleteFriend = await movies_controller.deleteOne(
        req.params.userid,
        req.query.email
      );
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
