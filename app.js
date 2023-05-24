const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const foodsRouter = require("./routes/api/foods");
const ordersRouter = require("./routes/api/orders");
const couponsRouter = require("./routes/api/coupons");
const shopsRouter = require("./routes/api/shops");

const { errorHandler } = require("./helpers/apiHelper");
const FILE_DIR_AVATARS = path.resolve("./public/images/");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", express.static(FILE_DIR_AVATARS));

app.use("/api/foods", foodsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/coupons", couponsRouter);
app.use("/api/shops", shopsRouter);

app.use(errorHandler);

module.exports = app;
