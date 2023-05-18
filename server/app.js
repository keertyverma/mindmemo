require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const config = require("config");
const logger = require("./utils/logger");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

// routes
app.use(`/${config.get("server.app_name")}/api`, routes);

app.listen(PORT, () => {
  logger.debug(`App enviornment = ${process.env.NODE_ENV}`);
  logger.info(`Server is running on PORT:${PORT}`);
});
