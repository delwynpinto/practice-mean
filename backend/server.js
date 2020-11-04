const app = require("./app");
const debug = require("debug")("node-angular");
const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

// Error event handler
const onError = error => {
  // Verifying that the call was listening for connections
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    // Permission denied error
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
      // Error of the bind address already being in use by a different server
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// Listening event handler
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

// Condition to use the default port of the hosting provider or 3000 during development
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Creating the server
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);

