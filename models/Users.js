const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

const findUsers = (name) => {
  return users.find.all({});
};

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
