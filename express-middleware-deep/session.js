const express = require("express");
const session = require("express-session");
const app = express();

const PORT = 3000;

// In the Express web application, the express-session middleware is
//  mainly used for managing the sessions for the user-specific data.

// express-session middleware allows the creation and storage
// of the session data used for authentication or user preferences

// Using this middleware, we can properly maintain the stateful interaction
//  between the Express.js server and the client.

// Using the sessions the security of the application is maintained
//  and interaction with the user is increased

// setting the session middleware
app.use(
  session({
    secret: "user-key",
    resave: false,
    saveUninitialized: true,
  })
);

// set session in the / route
app.get("/", (req, res) => {
  // session variable
  req.session.user = "Hello there!!!";

  res.send(`Hey there! Session is set
        Now go to http://localhost:3000/get to retrieve the session.
    `);
});

app.get("/get", (req, res) => {
  // retrieve the session variable

  const user = req.session.user || "No session set";
  res.send(`Session variable: ${user}`);
});

app.listen(PORT, (req, res, next) => {
  console.log(`Server listening on PORT ${PORT}`);
});
