const express = require("express");

const app = express();

const test = require("./test.js");

app.use("/test", test);

const path = require("path");

const PORT = process.env.port || 3000;

app.get("/", function (req, res) {
  res.send("This is a get request!!\n");
});

app.post("/", function (req, res) {
  res.send("This is a POST request!!\n");
});

app.put("/", function (req, res) {
  res.send("This is a PUT request!!\n");
});

app.get("/hey", function (req, res) {
  res.send("This is a get request to '/hey'!!\n");
});

app.listen(PORT);
