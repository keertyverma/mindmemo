const { Task } = require("../models/task");
const { StatusCodes } = require("http-status-codes");
const logger = require("../utils/logger");

const getAllTasks = async (req, res) => {
  logger.debug("GET Request -> Getting all tasks");
  const tasks = await Task.find();
  res.status(StatusCodes.OK).json(tasks);
};

const createTask = async (req, res) => {
  logger.debug("POST Request -> Creating task");
  const { title, content } = req.body;

  const result = await Task.create({ title, content });
  res.status(StatusCodes.CREATED).json(result);
};

module.exports = { getAllTasks, createTask };
