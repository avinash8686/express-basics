const express = require("express");
// const index = require('in')
const app = express();
app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
  res.render("index.ejs", {
    data: req.params.name,
  });
});

app.listen(4000, () => {
  console.log("Server running on 4000");
});
