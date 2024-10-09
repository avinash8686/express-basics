const express = require("express");

const Router = express.Router();

Router.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("This is response sent to client for GET request");
  })
  .post((req, res, next) => {
    res.end("This is response sent to client for POST request");
  })
  .put((req, res, next) => {
    res.end("This is response sent to client when PUT request is made");
  })
  .delete((req, res, next) => {
    res.end("This is response sent to client when DELETE request is made");
  });

module.exports = Router;
