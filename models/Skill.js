const mongoose = require("mongoose");

const Skill = mongoose.model("Skill", {
  name: String,
  description: String,
  category: String,
});
module.exports = Skill;
