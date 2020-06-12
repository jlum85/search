const mongoose = require("mongoose");

const Site = mongoose.model("Site", {
  name: String,
  url: String,
});
module.exports = Site;
