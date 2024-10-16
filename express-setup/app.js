const express = require("express");

const app = express();

const PORT = 3000;
const path = require("path");

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "Static Files")));

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "dummy-author.png"));
});

app.post("/", (req, res) => {
  const { name } = req.body;

  res.send(`Welcome ${name}`);
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello Everyone</h1>");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is successfully running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
