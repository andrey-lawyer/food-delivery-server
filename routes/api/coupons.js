const express = require("express");

const {
  addCouponValidation,
} = require("../../middlewars/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelper");

const {
  addCouponController,
  getCouponsController,
} = require("../../controllers/couponController");

const router = express.Router();

router.get("/", asyncWrapper(getCouponsController));
router.post("/", addCouponValidation, asyncWrapper(addCouponController));

module.exports = router;
