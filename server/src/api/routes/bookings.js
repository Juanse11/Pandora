const express = require("express");
const router = express.Router();

// const Payment = require("../../models/Payment");

router.post("/", async function(req, res) {
  console.log(req);
  
  res.send({ });
});
router.get("/", async function(req, res) {
  console.log('get');
  
  res.send({ msg: 'get' });
});
router.put("/", async function(req, res) {
  console.log('put');
  
  res.send({ msg: 'get' });
});

module.exports = router;
