const express = require("express");
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasks");
const validateObjectId = require("../middleware/validate-objectid");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(validateObjectId, getTaskById)
  .patch(validateObjectId, updateTaskById)
  .delete(validateObjectId, deleteTaskById);

module.exports = router;
