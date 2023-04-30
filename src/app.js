const express = require("express");

const app = express();

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});

app.get("/", (req, res) => {
  res.send("welcome to my home page");
});

//sub domain /name
app.get("/name", (req, res) => {
  res.send("welcome my name is owis bukahri");
});
