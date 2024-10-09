const express = require("express");
const winston = require("winston");

const app = express();

const PORT = 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Use DEBUG to log only the required parts as below:
// $ DEBUG=express:router node index.js
// This gives logs only of the router part. Similarly, you can do for application as well.

// $ DEBUG=express:application node index.js
// If you want for both of them you can do so by running the code:

// DEBUG = express:application,express:router node index.js

// Debug environment variables

// Suppose you want the logs to be visible in a different manner. Suppose you don’t want the colors to appear or you want to see some hidden information, you can do that by setting environment variables. Some of these variables are:

// DEBUG: Select the namespaces for which you want to see the logs.
// DEBUG_COLORS: By setting this to either 1 or 0 you can decide whether the logs that will be visible will be in different colors or the same white color. If you set DEBUG_COLORS to 0 the logs will appear in white plain text. By default, it is set to 0.
// DEBUG_HIDE_DATE: This can hide the date from debug output.
// DEBUG_SHOW_HIDDEN: This shows hidden properties on inspected objects.

// Logging Errors
const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

app.get("/", (req, res, next) => {
  throw new Error("Something went wrong!");
});

// Centralized error handling middleware
function errorHandler(err, req, res, next) {
  logger.error(err.message, { metadata: err.stack });
  res.status(500).json({ error: err.message });
}

app.use(errorHandler);

app.listen(PORT);
