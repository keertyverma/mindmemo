const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
} = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.patch("/:id", updateTaskById);

module.exports = router;
