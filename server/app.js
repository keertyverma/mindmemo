require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const config = require("config");
const logger = require("./utils/logger");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

// routes
app.use(`/${config.get("server.app_name")}/api`, routes);

// connect with db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    logger.info("Connected to Mongo DB");
  })
  .catch((err) => logger.error(err));

app.listen(PORT, () => {
  logger.debug(`App enviornment = ${process.env.NODE_ENV}`);
  logger.info(`Server is running on PORT:${PORT}`);
});
