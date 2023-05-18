const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);

module.exports = router;
