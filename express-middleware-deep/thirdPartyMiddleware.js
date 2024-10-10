const express = require("express");

const parser = require("body-parser");

const app = express();

const PORT = 3000;

// using 3rd party body-parser middleware to parse JSON requests
app.use(parser.json());

app.post("/api/data", (req, res) => {
  const reqData = req.body;
  console.log("Received data: ", reqData);

  res.status(200).json({ message: "Data received successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
