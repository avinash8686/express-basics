const express = require("express");

const app = express();
const PORT = 3000;

// --------------------------------------------------------------------
// router.all();
// Is just like the router.METHOD() methods,
// except that it matches all HTTP methods (verbs).
// It is very helpful for mapping global logic for arbitrary matches or specific path prefixes.

// const router = express.Router();
// Setting single route
// router.all("/user", function (req, res) {
//   console.log("User Page Called");
//   res.end();
// });

// app.use(router);

// Setting multiple routes
// router.all("/user", function (req, res) {
//   console.log("User Page Called");
//   res.end();
// });

// router.all("/student", function (req, res) {
//   console.log("Student Page Called");
//   res.end();
// });

// router.all("/teacher", function (req, res) {
//   console.log("Teacher Page Called");
//   res.end();
// });

// app.use(router);

// --------------------------------------------------------------------
// router.method();
// GET,PUT,DELETE,POST & So on.....

// --------------------------------------------------------------------

// router.param()
// The parameters of router.param() are a name and function.
// Where the name is the actual name of the parameter
// and the function is the callback function.

// const userRoutes = require("./route");

// app.use("/", userRoutes);

// --------------------------------------------------------------------
// router.route()
// function returns an instance of a single route that you can then use to handle HTTP verbs
// With optional middleware. You can also use the router.route() function
// to avoid duplicate route naming as well as typing errors.
// const router = express.Router();
// router.route("/user").get(function (req, res, next) {
//   console.log("GET req called");
//   res.end();
// });

// Multiple routing
// router
//   .route("/user")
//   .get(function (req, res, next) {
//     console.log("GET request called");
//     res.end();
//   })
//   .post(function (req, res, next) {
//     console.log("POST request called");
//     res.end();
//   })
//   .put(function (req, res, next) {
//     console.log("PUT request called");
//     res.end();
//   });

// app.use(router);

// -------------------------------------------------------------------------
// router.use()
// Function uses the specified middleware function or functions.
// It basically mounts middleware for the routes which are being served by the specific router.

// All requests to this router will
// first hit this middleware

// const router = express.Router();
// router.use(function (req, res, next) {
//   console.log("Middleware Called");
//   next();
// });

// // Always invoked
// router.use(function (req, res, next) {
//   res.send("Welcome");
// });

// app.use("/user", router);

// app.use(router);

app.listen(PORT);
