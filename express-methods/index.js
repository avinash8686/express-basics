const express = require("express");

const app = express();

const PORT = 3000;

// --------------------------------------------------------------------------------
// express.json()
// The express.json() middleware is an essential part of any Express.js
//  application dealing with JSON data.
// It simplifies handling json payloads.
// Data is automatically parsed and available to use in routes.

app.use(express.json());

app.post("/", function (req, res) {
  console.log(req.body.name);
  res.end();
});

// --------------------------------------------------------------------------------
// express.raw()
// It parses incoming payload into a Buffer and is based on body-parser
// app.use(express.raw({ type: "*/*" }));

// app.post("/", function (req, res) {
//   console.log(req.body);
//   res.end();
// });

// --------------------------------------------------------------------------------
// express.Router()
// Used to create new Router object
// Utilised to create new router object in program to handle different paths
// as in router for all /user, /user/name, /user/:id....
// another router for all products as in /product, /product/name, /product/:id

// const router = express.Router();
// const router1 = express.Router();
// const router2 = express.Router();
// const router3 = express.Router();

// router.get("/", function (req, res, next) {
//   console.log("router working");
//   res.end();
// });

// router1.get("/user", function (req, res, next) {
//   console.log("User Router Working");
//   res.end();
// });

// router2.get("/admin", function (req, res, next) {
//   console.log("Admin Router Working");
//   res.end();
// });

// router3.get("/student", function (req, res, next) {
//   console.log("Student Router Working");
//   res.end();
// });

// app.use(router);
// app.use(router1);
// app.use(router2);
// app.use(router3);

// --------------------------------------------------------------------------------
// express.static()
// express.static(root, [options])
// root describes root directory from which to serve static assets.
// const path = require("path");

// app.set("view engine", "ejs");
// app.use(express.static(path.join(path.join(__dirname, "public"))));

// app.get("/", (req, res, next) => {
//   res.render("index.ejs");
// });

// --------------------------------------------------------------------------------
// express.text()
// It parses incoming payload into a string

// app.use(express.text());
// app.post("/", function (req, res) {
//   console.log(req.body);
//   console.log(typeof req.body);

//   res.end();
// });

// app.use(express.text());
// app.post("/", function (req, res) {
//   console.log(req.body);
//   console.log(typeof req.body);

//   res.end();
// });

// --------------------------------------------------------------------------------
// express.urlencoded
// used to parse incoming requests with URL-encoded payloads.

// app.use(express.urlencoded({ extended: false }));

// app.post("/", function (req, res) {
//   console.log(req.body);
//   res.end();
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
