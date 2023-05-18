require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to MindMemo app</h1>");
});

app.listen(PORT, () => {
  console.log(`App enviornment = ${process.env.NODE_ENV}`);
  console.log(`Server is running on PORT:${PORT}`);
});
