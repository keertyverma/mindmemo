const express = require("express");
const taskRoute = require("./tasks");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Welcome to MindMemo app</h1>");
});
router.use("/tasks", taskRoute);

module.exports = router;
