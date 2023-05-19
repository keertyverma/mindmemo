const { StatusCodes } = require("http-status-codes");

const notFound = (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ error_msg: "Route does not exists." });
};

module.exports = notFound;
