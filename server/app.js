require("dotenv").config({ path: __dirname + "/.env" });
require("express-async-errors");
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const logger = require("./utils/logger");
const routes = require("./routes");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());

// routes
app.use(`/${config.get("server.app_name")}/api`, routes);

// error handler
app.use(notFound);
app.use(errorHandlerMiddleware);

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
