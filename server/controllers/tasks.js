const { StatusCodes } = require("http-status-codes");
const { Task } = require("../models/task");
const logger = require("../utils/logger");
const { NotFoundError } = require("../errors");

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

const getTaskById = async (req, res) => {
  logger.debug("GET Request -> Get task by id");

  const id = req.params.id;
  const task = await Task.findById(id);
  if (!task) {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    throw new NotFoundError(error);
  }
  res.status(StatusCodes.OK).json(task);
};

const updateTaskById = async (req, res) => {
  logger.debug("PATCH Request -> Update task by ID");

  id = req.params.id;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title: req.body.title, content: req.body.content },
    { new: true }
  );

  if (!updatedTask) {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    throw new NotFoundError(error);
  }

  res.status(StatusCodes.OK).json(updatedTask);
};

const deleteTaskById = async (req, res) => {
  logger.debug("DELETE Request -> Delete task by ID");

  id = req.params.id;
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    throw new NotFoundError(error);
  }

  res.status(StatusCodes.OK).json(deletedTask);
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
