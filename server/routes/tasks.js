const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.patch("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

module.exports = router;
