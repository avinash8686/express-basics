const express = require("express");

const app = express();
const path = require("path");

const port = process.env.port || 3000;

// These are middlewares tooo.....
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "Static Files")));

// routers are middlewares tooo.....
const homeroute = require("./routes/Home");
const loginroute = require("./routes/login");

app.use("/", homeroute);
app.use("/", loginroute);
// Types of Middleware
// Express JS offers different types of middleware and you should choose the middleware on the basis of functionality required.

// Application-level middleware: Bound to the entire application using app.use() or app.METHOD() and executes for all routes.
// Router-level middleware: Associated with specific routes using router.use() or router.METHOD() and executes for routes defined within that router.
// Error-handling middleware: Handles errors during the request-response cycle. Defined with four parameters (err, req, res, next).
// Built-in middleware: Provided by Express (e.g., express.static, express.json, etc.).
// Third-party middleware: Developed by external packages (e.g., body-parser, morgan, etc.).

app.get(
  "/",
  (req, res, next) => {
    console.log("hello");
    next();
  },
  (req, res) => {
    res.send(`<div><h2>Welcome </h2>
    <h5>Enjoy learning</h5>
  </div>`);
  }
);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
