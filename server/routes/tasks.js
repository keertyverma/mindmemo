const express = require("express");
const { getAllTasks, createTask } = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);

module.exports = router;
