const express = require("express");

const app = express();

const PORT = 3000;

// --------------------------------------------------------------
// req.app
// Holds the ref to instance of express app
// app.get("/", function (req, res) {
//   console.log(req.app);
//   console.log(req.app === app);
//   res.send();
// });

// --------------------------------------------------------------
// req.baseUrl
// Url path on which router instance is mounted

// Eg: 1
// const user = express.Router();

// user.get("/login", function (req, res) {
//   console.log(req.baseUrl);
//   res.end();
// });

// app.use("/user", user);

// Eg:2

// const student = express.Router();
// app.use("/student", student);

// student.get("/signup", function (req, res) {
//   if (req.baseUrl === "/student") {
//     console.log("Showing SignUp Form");
//     res.end();
//   } else {
//     console.log("Invalid Request");
//     console.log("Invalid Route");
//   }
// });

// --------------------------------------------------------------

// req.body
// Contains key-value pairs of data submitted in req body
// By default, it is undefined and is populated when you use a middleware called body-parsing
//  such as express.urlencoded() or express.json().

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post("/profile", function (req, res) {
//   console.log(req.body);
//   res.send();
// });

// app.post("/signup", function (req, res) {
//   const data = req.body;
//   console.log("body", req.body);
//   console.log("data", data);
//   console.log("Name:", data.name);
//   console.log("Age:", data.age);
//   console.log("Gender:", data.gender);
//   res.send();
// });

// --------------------------------------------------------------
// req.cookies
// It is used when user is using cookie-parser middleware
// This property is an object that contains cookies sent by request

// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// Eg: 1
// app.get("/", function (req, res) {
//   req.cookies.title = "Welcome";
//   console.log(req.cookies);
//   res.send();
// });

// Eg: 2
// app.get("/", function (req, res) {
//   req.cookies.name = "Rock";
//   req.cookies.age = "12";
//   console.log(req.cookies);
//   res.send();
// });

// --------------------------------------------------------------
// req.fresh
// Returns true, if the response is still 'fresh' in the client's cache
// else it will return false.

// if (req.fresh) {
//     // The user-agent is asking for a more up-to-date version of the requested resource.
//     // Let's hit the database to get some stuff and send it back.
//   }

// app.get("/", function (req, res) {
//   console.log(req.fresh);
//   res.end();
// });

// --------------------------------------------------------------
// req.accepts()
// checks if the specified content types are acceptable on the basis of the requests
// Accept HTTP header field.

// Eg: 1
// app.get("/", function (req, res) {
//   console.log(req.get("Accept"));
//   console.log(req.accepts("application/json"));
//     console.log(req.get("Accept"));
//   res.end();
// });

// Eg:2
// app.get("/", function (req, res) {
//   console.log(req.get("Accept"));
//   console.log(req.accepts("text/plain"));
//   res.end();
// });

// --------------------------------------------------------------
// req.acceptsCharsets()
// returns the first accepted charset of the specified character sets
// on the basis of the request’s Accept-Charset HTTP header field
// otherwise it returns false if none of the specified charsets is accepted.

// Eg:1
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Charset"));
//   console.log(req.acceptsCharsets("UTF-8"));
//   res.end();
// });

// Eg:2
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Charset"));
//   console.log(req.acceptsCharsets("ISO-8859-1"));
//   res.end();
// });

// ---------------------------------------------------------------
// req.acceptsEncodings()
//  returns the first accepted encoding of the specified encodings
// on the basis of the request Accept-Encoding HTTP header field and
// it returns false if none of the specified encodings is accepted.

// Eg:1
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Encoding"));
//   console.log(req.acceptsEncodings("gzip"));
//   res.end();
// });

// Eg:2
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Encoding"));
//   console.log(req.acceptsEncodings("compress"));
//   res.end();
// });

// ---------------------------------------------------------------
// req.acceptsLanguages()
// returns the first accepted language of the specified language
// on the basis of the request that Accept-Language HTTP header field
// and it returns false if none of the specified languages is accepted.

// Eg: 1
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Language"));
//   console.log(req.acceptsLanguages("en-US"));
//   res.end();
// });

// Eg:2
// app.get("/", function (req, res) {
//   console.log(req.get("Accept-Language"));
//   console.log(req.acceptsLanguages("fr-CH"));
//   res.end();
// });

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
});
