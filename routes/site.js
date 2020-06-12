const express = require("express");
const router = express.Router();
// const ObjectId = require("mongodb").ObjectID;

const Site = require("../models/Site");

router.post("/site", async (req, res) => {
  const { name, url } = req.fields;

  const Site = new User({
    name,
    url,
  });

  try {
    await Site.save();
    console.log("site created", user);
    res.json({
      _id: Site._id,
      name: Site.name,
      url: Site.url,
    });
  } catch (error) {
    console.log("Error Post Site :", error);
    res.status(400).json({ message: "Error Post Site" });
  }
});

module.exports = router;
