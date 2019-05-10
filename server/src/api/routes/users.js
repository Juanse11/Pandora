const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", async function(req, res) {
  const posts = await Post.query();
  res.send({ msg: posts });
});

module.exports = router;
