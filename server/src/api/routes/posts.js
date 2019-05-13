const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

router.get("/", async function(req, res) {
  console.log("req.query: ", req.query);

  const posts = await Post.query();
  res.status(200).send({ posts });
});

router.get("/:id", async function(req, res) {
  const post = await Post.query().findById(req.params.id);
  res.status(200).send({ post });
});

router.post("/:id", async function(req, res) {
  await Post.query().insert(req.body);
  res.status(200).send({ message: "Post added succesfully" });
});

module.exports = router;
