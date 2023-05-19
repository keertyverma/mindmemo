const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new BadRequestError("Invalid ID");
  }

  next();
};

module.exports = validateObjectId;
