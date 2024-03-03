const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stoppable = require("stoppable");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config("./env");
app.use(require("./src/Routes"));

const port = 8080;

const server = stoppable(
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  })
);

process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  server.stop(() => {
    console.log("Server stopped.");
  });
});

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  server.stop(() => {
    console.log("Server stopped.");
  });
});
