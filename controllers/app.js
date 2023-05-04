const express = require("express");
const url = require("mongoose");
const UsersDB = require("../models/users");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//database connection
url
  .connect(
    "mongodb+srv://admin:admin@cluster0.e0ld66h.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
  });
//config ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// root domain response
app.get("/", (req, res) => {
  res.send("welcome to my home page");
});

app.get("/usersView", (req, res) => {
  UsersDB.find()
    .then((data) => {
      res.render("usersView.ejs", { users: data });
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post("/usersView", (req, res) => {
  const usersData = new UsersDB({
    name: req.body.name,
    age: req.body.age,
  });
  usersData
    .save()
    .then(() => {
      res.redirect("/usersView");
    })
    .catch((err) => {
      res.send(err);
    });
});

// app.get("/displayUsers", (req, res) => {
//   UsersDB.find()
//     .then((data) => {
//       res.render("displayUsers.ejs", { users: data });
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

//testing port 8080
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
