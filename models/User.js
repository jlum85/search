const mongoose = require("mongoose");

const User = mongoose.model("User", {
  email: String,
  salt: String,
  hash: String,
  token: String,
  username: String,
});
module.exports = User;
