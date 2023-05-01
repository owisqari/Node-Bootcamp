const express = require("express");
const app = express();

//config ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// super domain response
app.get("/", (req, res) => {
  res.send("welcome to my home page");
});

//path /name response
app.get("/name", (req, res) => {
  res.send("welcome my name is owis bukahri");
});

app.get("/testEjs", (req, res) => {
  const num = 77;
  res.render("test1.ejs", { num: num });
});
//testing port 8080
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
