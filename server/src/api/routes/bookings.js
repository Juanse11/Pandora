const express = require("express");
const router = express.Router();

const Booking = require("../../models/Booking");

router.get("/", async function(req, res) {  
  const bookings = await Booking.query()
    .where("dateTimeFrom", "<=", req.query.dateTimeTo)
    .andWhere("dateTimeTo", ">=", req.query.dateTimeFrom);
  res.send({ bookings });
});

router.post("/", async function(req, res) {
  console.log(req.body);

  res.send({});
});

module.exports = router;
