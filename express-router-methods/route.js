const express = require("express");

const router = express.Router();

router.param("/userId", (req, res, next, id) => {
  console.log("This fn will be called first");
  next();
});

router.get("/user/:userId", (req, res) => {
  console.log("Then this will be called");
  res.end();
});

module.exports = router;
