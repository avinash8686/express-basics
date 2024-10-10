const express = require("express");

const app = express();

const PORT = 3000;

// Express.js is a routing and Middleware framework for handling the different routing
// of the webpage, and it works between the request and response cycle.
// Express.js use different kinds of middleware functions in order to complete the
// different requests made by the client

// The Best Example
// next() : move control to next function in same route. case of multiple functions in single route.
// next('route') :move control to next route by skipping all remaining function in current route.
// next(err) : move control to error middleware

app.get(
  "/testroute/:id",
  function (req, res, next) {
    if (req.params.id === "0")
      next(); // Take me to the next function in current route
    else if (req.params.id === "1") next("route");
    //Take me to next routes/middleware by skipping all other functions in current router
    else
      next(
        new Error(
          "Take me directly to error handler middleware by skipping all other routers/middlewares"
        )
      );
  },
  function (req, res, next) {
    // render a regular page
    console.log("Next function in current route");
    res.status(200).send("Next function in current route");
  }
);

// handler for the /testroute/:id path, which renders a special page
app.get("/testroute/:id", function (req, res, next) {
  console.log(
    "Next routes/middleware by skipping all other functions in current router"
  );
  res
    .status(200)
    .send(
      "Next routes/middleware by skipping all other functions in current router"
    );
});
//error middleware
app.use(function (err, req, res, next) {
  console.log(
    "take me to next routes/middleware by skipping all other functions in current router"
  );
  res.status(err.status || 500).send(err.message);
});

// // Same routes, If we want to run more than 1 route for same path /gfg we can call the next() middleware

// app.get("/gfg", (req, res, next) => {
//   res.send("This is the post request");
//   console.log("1");
//   next();
// });

// app.get("/gfg", (req, res, next) => {
//   console.log("2");
//   res.send("This is the get request");
// });

app.listen(PORT, function (req, res) {
  console.log("Server listening on PORT: ", PORT);
});
