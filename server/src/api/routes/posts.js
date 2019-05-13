const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", async function(req, res) {
  const post = await Post.query();
  res.send({ post });
});

router.get("/:id", async function(req, res) {
  const post = await Post.query().findById(req.params.id);
  res.send({ post })
});

router.post("/:id", async function(req, res) {
  await Post.query().insert(req.body);
  res.send({ message: "Post added succesfully" });
});

module.exports = router;
