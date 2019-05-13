const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/:id", async function(req, res) {
  const userPosts = await User.query().findById(req.params.id).eager('posts');
  res.send({ userPosts });
});

module.exports = router;
