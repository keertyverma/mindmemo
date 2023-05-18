const express = require("express");
const { getAll } = require("../controllers/tasks");

const router = express.Router();

router.get("/", getAll);

module.exports = router;
