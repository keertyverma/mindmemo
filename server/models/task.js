const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [
      true,
      "Please check your data entry, no title specified for task!",
    ],
  },
  content: {
    type: String,
    required: [
      true,
      "Please check your data entry, no content specified for task!",
    ],
  },
  created_at: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = { Task };
