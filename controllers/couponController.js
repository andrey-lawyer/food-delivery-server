const { addCoupon, getAllCoupons } = require("../services/couponService");

const addCouponController = async (req, res) => {
  const newCoupon = req.body;
  await addCoupon(newCoupon);
  res.status(201).json({ status: "success" });
};

const getCouponsController = async (req, res) => {
  const foods = await getAllCoupons();
  res.status(200).json(foods);
};



module.exports = {
  addCouponController,
  getCouponsController,
};
