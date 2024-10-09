const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  // Log the request URL
  console.log("Request URL:", req.url);

  // Log the request method
  console.log("Request METHOD:", req.method);

  // Log the request method
  console.log("Request HEADERS:", req.headers);

  // Sending a response
  res.send("Hello World!");
});

// req methods:
// ‘req.query’: Access query string parameters
// ‘req.params’: Access route parameters
// ‘req.body’: Access the body of the request (for POST/PUT)
// ‘req.headers’: Access request headers

// req properties:
// ‘req.method’: HTTP method (e.g., GET, POST)
// ‘req.url’: URL of the request
// ‘req.cookies’: Cookies sent by the client
// ‘req.ip’: IP address of the client

// Typical usage of req
// Access and process incoming data
// Determine the request path, method, and parameters

// res methods:
// ‘res.send()’: Send a response body
// ‘res.json()’: Send a JSON response
// ‘res.status()’: Set the status code of the response
// ‘res.sendFile()’: Send a file as the response

// res properties:
// ‘res.headersSent’: Boolean indicating if the headers have been sent
// ‘res.locals’: Object for passing data to the views
// ‘res.app’: Access the Express application object

// Typical Usage of res
// Send back a response to the client
// Set response headers, cookies, and status codes

app.listen(3000);
