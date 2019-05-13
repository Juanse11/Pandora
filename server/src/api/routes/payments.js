const express = require("express");
const router = express.Router();

// const Payment = require("../../models/Payment");

router.post("/", async function(req, res) {
  console.log(req.body);

  res.send({ msg: "booking" });
});
router.get("/", async function(req, res) {
  console.log("get");

  res.send({ msg: "get" });
});

module.exports = router;
