const express = require("express");
const port = 8888;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("Welcome to RoulEats!");
});
