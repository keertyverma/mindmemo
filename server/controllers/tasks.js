const { StatusCodes } = require("http-status-codes");
const Joi = require("joi");
const { Task } = require("../models/task");
const logger = require("../utils/logger");
const { NotFoundError, BadRequestError } = require("../errors");

const validateTask = (task) => {
  const schema = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
  });

  return schema.validate(task);
};

const getAllTasks = async (req, res) => {
  logger.debug("GET Request -> Getting all tasks");
  const tasks = await Task.find().sort({ created_at: -1 }).select({ __v: 0 });
  res.status(StatusCodes.OK).json(tasks);
};

const createTask = async (req, res) => {
  logger.debug("POST Request -> Creating task");

  // validate input
  const { error } = validateTask(req.body);
  if (error) {
    throw new BadRequestError(error.details[0].message);
  }

  const { title, content } = req.body;

  const result = await Task.create({ title, content, created_at: new Date() });
  res.status(StatusCodes.CREATED).json(result);
};

const getTaskById = async (req, res) => {
  logger.debug("GET Request -> Get task by id");

  const id = req.params.id;
  const task = await Task.findById(id).select({ __v: 0 });
  if (!task) {
    const error = `No task found with id = ${id}`;
    logger.error(error);
    throw new NotFoundError(error);
  }
  res.status(StatusCodes.OK).json(task);
};

const updateTaskById = async (req, res) => {
  logger.debug("PATCH Request -> Update task by ID");

  // validate input
  const { error } = validateTask(req.body);
  if (error) {
    throw new BadRequestError(error.details[0].message);
  }

  id = req.params.id;
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title: req.body.title, content: req.body.content },
    { new: true }
  ).select({ __v: 0 });

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
  const deletedTask = await Task.findByIdAndDelete(id).select({ __v: 0 });

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
