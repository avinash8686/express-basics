const express = require("express");
const winston = require("winston");

const app = express();

// Points to Consider while Handling Errors
// Consistent Error Responses: Ensure all errors are returned in a consistent format, making it easier for clients to handle errors.
// Avoid Exposing Sensitive Information: Do not expose stack traces or sensitive information in error responses in production.
// Use HTTP Status Codes: Use appropriate HTTP status codes to indicate the type of error (e.g., 400 for bad requests, 404 for not found, 500 for server errors).
// Validation Errors: Handle validation errors explicitly to provide meaningful feedback to users. This often involves checking user inputs and returning specific error messages.
// Environment-Specific Handling: Differentiate error handling behavior between development and production environments. In development, you might want detailed error messages and stack traces, whereas in production, you should provide user-friendly messages and log the details for further investigation.

// Way - 1
app.get("/", (req, res) => {
  throw new Error("Something went wrong");
});

// Error handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Way - 2
// Centralized error handling with Consistent error handling for any error
// app.length("/", (req, res) => {
//   throw new Error("Something went wrong!");
// });

// function errorHandler(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).json({ error: err.message });
// }

// app.use(errorHandler);

// Way - 3
// Handling Async Errors
// app.get("/", async (req, res, next) => {
//   try {
//     throw new Error("Something went wrong!");
//   } catch (err) {
//     next(err);
//   }
// });

// // Centralized error handling middleware
// function errorHandler(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).json({ error: err.message });
// }

// app.use(errorHandler);

// Way - 4
// Custom Error Classes
// Mostly useful, bcoz everytime we face a 500 error
// we don't need to do res.status(500).json({error. err.message})
// Instead we can create InternalServerErr class and call it as we done below for 404
// class NotFoundError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NotFoundError";
//     this.statusCode = 404;
//   }
// }

// app.get("/", (req, res, next) => {
//   next(new NotFoundError("Resource not found"));
// });

// // Centralized error handling middleware
// function errorHandler(err, req, res, next) {
//   console.error(err.stack);
//   res.status(err.statusCode || 500).json({ error: err.message });
// }

// app.use(errorHandler);

// Way - 5
// Logging Errors
// const logger = winston.createLogger({
//   level: "error",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//   ],
// });

// app.get("/", (req, res, next) => {
//   throw new Error("Something went wrong!");
// });

// // Centralized error handling middleware
// function errorHandler(err, req, res, next) {
//   logger.error(err.message, { metadata: err.stack });
//   res.status(500).json({ error: err.message });
// }

// app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
