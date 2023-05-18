const { Task } = require("../models/task");
const logger = require("../utils/logger");

const getAllTasks = async (req, res) => {
  logger.debug("GET Request -> Getting all tasks");
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

module.exports = { getAllTasks };
