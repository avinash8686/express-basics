const express = require("express");

// routers
const homeroute = require("./routes/Home");
const loginroute = require("./routes/login");

const app = express();

const PORT = 3000;
const path = require("path");

app.use("/", homeroute);
app.use("/", loginroute);

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "Static Files")));

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "dummy-author.png"));
});

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
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
