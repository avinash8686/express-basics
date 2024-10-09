const express = require("express");

const app = express();

const PORT = 3000;

// ---------------------------------------------------------------------
// res.app
// Holds a reference to the instance of the Express application that is using the middleware.

// Eg: 1
// app.get("/", function (req, res) {
//   console.log(res.app.get("views"));
//   res.end();
// });

// Eg: 2
// app.get("/getApp", function (req, res) {
//   console.log(res.app);
//   res.end();
// });

// ---------------------------------------------------------------------
// res.headersSent
// Property is a boolean property that indicates if the app sent HTTP headers for the response.

// Eg:1
// app.get("/", function (req, res) {
//   console.log(res.headersSent);// till this point headers are not sent
//   res.send("OK"); //Here headers are sent
// });

// Eg:2
// app.get("/", function (req, res) {
//   res.send("OK"); //Here headers are sent
//   console.log(res.headersSent); // If we check now it will be true.
// });

// ---------------------------------------------------------------------
// res.locals
// Property is an object that holds response local variables specific to the current request.

// Eg: 1
// app.get("/", function (req, res) {
//   res.locals.user = "Welcome";
//   console.log(res.locals);
//   res.end();
// });

// Eg: 2;
// app.get("/", function (req, res) {
//   // Sending multiples locals
//   res.locals.name = "Gourav";
//   res.locals.age = 13;
//   res.locals.gender = "Male";
//   console.log(res.locals);
//   res.end();
// });

// --------------------------------------------------------------------------
// res.append()
// function appends the specified value to the HTTP response header field and
// if the header is not already set then it creates the header with the specified value.

// Without middleware
// app.get("/", function (req, res) {
//   res.append("Warning", "201 Warning");
//   console.log(res.get("Warning")); // 201 Warning
// });

// With middleware
// app.use("/", function (req, res, next) {
//   res.append("Warning", "201 Its a Warning");
//   next();
// });

// app.get("/", function (req, res) {
//   console.log(res.get("Warning"));
//   res.send();
// });

// --------------------------------------------------------------------------

// res.attachment()
// function is used to set the HTTP response Content-Disposition header field to ‘attachment’.
// If the name of the file is given as a filename,
// then it sets the Content-Type based on the extension name through the res.type() function
// and finally sets the Content-Disposition ‘filename = ‘ parameter.

// Without middleware
// app.get("/", function (req, res) {
//   res.attachment("Hello.txt");
//   console.log(res.get("Content-Disposition"));
// });

// --------------------------------------------------------------------------
// res.cookie()
// Used to set the cookie name to value.
// The value parameter may be a string or object converted to JSON.

// app.get("/", function (req, res) {
//   res.cookie("name", "hlo");
//   res.send("Cookie Set");
// });

// With middleware
// app.use("/", function (req, res, next) {
//   res.cookie("title", "GeeksforGeeks");
//   res.send("Cookie Set");
//   next();
// });

// app.get("/", function (req, res) {
//   console.log("Cookie SET");
// });

// --------------------------------------------------------------------------
// res.clearCookie()
// Function is used to clear the cookie specified by name.
// This function is called for clearing the cookies which as already been set.
// For example, if a user cookie is set, then it can be cleared using this function.

// app.get("/", function (req, res) {
//   // Setting cookie (key-value)
//   res.cookie("title", "Rocky");

//   // Clearing the cookie
//   res.clearCookie("title");

//   console.log("Cookie cleared");
// });

// ----------------------------------------------------------------------------
// res.download()
// Function transfers the file at the path as an ‘attachment’.
// Typically, browsers will prompt the user to download.

// Eg: 1
// app.get("/", function (req, res) {
//   res.download("Hello.txt");
// });

// Eg: 2
// app.get("/", function (req, res) {
//   res.download("Unknown_file.txt", function (error) {
//     console.log("Error : ", error);
//   });
// });

// ------------------------------------------------------------------------------
// res.end()
// Function concludes the response process and is derived from the HTTP.ServerResponse’s response.end()
//  method in the Node core.
// It is employed to promptly conclude the response without including any data.

// Without middleware
// app.get("/", function (req, res) {
//   res.end();
// });

// With middleware
// app.use("/user", function (req, res, next) {
//   console.log("/user called");
//   res.end();
// });

// app.get("/user", function (req, res) {
//   console.log("User Page");
//   res.end();
// });

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT: ", PORT);
});
