require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const config = require("config");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 3000;
const app = express();

app.get(`/${config.get("server.app_name")}/`, (req, res) => {
  res.send("<h1>Welcome to MindMemo app</h1>");
});

app.listen(PORT, () => {
  logger.debug(`App enviornment = ${process.env.NODE_ENV}`);
  logger.info(`Server is running on PORT:${PORT}`);
});
