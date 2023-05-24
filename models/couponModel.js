const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  discount: {
    type: Number,
    required: [true, "discount is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
});

const Coupon = mongoose.model("coupons", couponSchema);

module.exports = {
  Coupon,
};
