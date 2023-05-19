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

const getTaskById = async (req, res) => {
  logger.debug("GET Request -> Get task by id");

  const id = req.params.id;
  const task = await Task.findById(id);
  if (task) {
    res.status(StatusCodes.OK).json(task);
  } else {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    res.status(StatusCodes.NOT_FOUND).json({ message: error });
  }
};

const updateTaskById = async (req, res) => {
  logger.debug("PATCH Request -> Update task by ID");

  id = req.params.id;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title: req.body.title, content: req.body.content },
    { new: true }
  );

  if (updatedTask) {
    res.status(StatusCodes.OK).json(updatedTask);
  } else {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    res.status(StatusCodes.NOT_FOUND).json({ message: error });
  }
};

const deleteTaskById = async (req, res) => {
  logger.debug("DELETE Request -> Delete task by ID");

  id = req.params.id;
  const deletedTask = await Task.findByIdAndDelete(id);

  if (deletedTask) {
    res.status(StatusCodes.OK).json(deletedTask);
  } else {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    res.status(StatusCodes.NOT_FOUND).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
