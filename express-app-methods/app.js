const express = require("express");

const app = express(); // main app

const PORT = 3000;

// --------------------------------------------------------------------------------
// app.disable()
// used to set boolean setting name to false.

// app.disable("trust proxy");

// console.log(app.get("trust proxy"));

// --------------------------------------------------------------------------------

// app.disabled()
// Used to return bool values of setting name

// console.log(app.disabled("trust proxy"));

// app.enable("trust proxy");

// console.log(app.get("trust proxy"));

// --------------------------------------------------------------------------------
// app.enable()
// used to set boolean value to true, basically enable something that is disabled
// app.enable("trust proxy");
// console.log(app.get("trust proxy"));

// --------------------------------------------------------------------------------
// app.enabled();
// used to whether the setting is enable
// if enabled, it returns true else false

// console.log(app.enabled("trust proxy"));
// app.enable("trust proxy");
// console.log(app.enabled("trust proxy"));

// --------------------------------------------------------------------------------
// app.mountpath
// It contains 1 or more path patterns on which sub-app was mounted
// const user = express(); // sub app

// user.get("/", function (req, res) {
//   console.log(user.mountpath); // user
//   res.send("User Homepage");
// });

// app.use("/user", user); // mounting the sub app

// --------------------------------------------------------------------------------
// The mount event is fired on a sub-app when it is mounted on a parent app
//  and the parent app is basically passed to the callback function.

// Eg:1
// const admin = express();

// admin.on("mount", function (parent) {
//   console.log("Admin mounted");
// });

// admin.get("/", function (req, res) {
//   res.send("Admin Homepage");
// });

// app.use("/admin", admin);

// Eg:2

// const student = express();
// const teacher = express();

// teacher.on("mount", function (parent) {
//   console.log("Teacher mounted");
// });

// student.on("mount", function (parent) {
//   console.log("Student mounted");
// });

// app.use("/teacher", teacher);
// app.use("/student", student);

// -------------------------------------------------------------

// The app.all() function is used to route all types of HTTP requests.
// Like if we have POST, GET, PUT, DELETE, etc, requests made to any specific route,
// let’s say /user, so instead of defining different APIs like
// app.post(‘/user’), app.get(‘/user’), etc, we can define single API app.all(‘/user’)
// which will accept all type of HTTP request.

app.all("/user", function (req, res, next) {
  console.log("USER API CALLED");
  next();
});

app.listen(PORT);
