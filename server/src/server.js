const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/users");
const postRoutes = require("./api/routes/posts");
const paymentRoutes = require("./api/routes/payments");
const bookingRouter = require("./api/routes/bookings")

require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/bookings", bookingRouter);

const port = process.env.PORT || 8000;
console.log(port);

app.listen(port, () => console.log("[Server] online " + new Date()));
