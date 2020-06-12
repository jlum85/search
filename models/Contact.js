const mongoose = require("mongoose");

const Contact = mongoose.model("Contact", {
  company: String,
  firstName: String,
  familyName: String,
  phone: String,
  mail: String,
});
module.exports = Contact;
