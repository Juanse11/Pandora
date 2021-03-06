const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");
const knex = Post.knex();

router.get("/", async function(req, res) {
  const filters = req.query;
  let {
    text = "",
    sortBy,
    price: { maximum } = {},
    price: { minimum } = {},
    sports = ["Futbol 11", "Futsal", "Tenis"],
    rating
  } = filters;

  maximum = maximum ? Number(maximum) : undefined;
  minimum = minimum ? Number(minimum) : undefined;
  rating = rating ? Number(rating) : undefined;
  console.log(sports);

  const posts = await Post.query()
    .skipUndefined()
    .where(
      knex.raw("? && sports", [
        [...sports.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1))]
      ])
    )
    .where("price", ">=", minimum)
    .andWhere("price", "<=", maximum)
    .where("rating", ">=", rating)
    .where(knex.raw('lower("city")'), "like", `%${text}%`);

  res.status(200).send({ posts });
});

router.get("/:id", async function(req, res) {
  const post = await Post.query().findById(req.params.id);
  res.status(200).send({ post });
});

router.post("/", async function(req, res) {
  const response = await Post.query().insert(req.body);
  res.status(200).send({ response });
});

module.exports = router;
