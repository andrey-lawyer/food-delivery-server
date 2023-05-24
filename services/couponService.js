const { Coupon } = require("../models/couponModel");

const getAllCoupons = async () => {
  const foods = await Coupon.find({});
  return foods;
};

const addCoupon = async (newCoupon) => {
  await Coupon.create(newCoupon);
};

module.exports = {
  getAllCoupons,
  addCoupon,
};
