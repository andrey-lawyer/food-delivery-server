const express = require("express");

const { addFoodValidation } = require("../../middlewars/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelper");

const {
  addFoodController,
  getFoodsController,
  getShopIdController,
} = require("../../controllers/foodController");

const router = express.Router();

router.get("/", asyncWrapper(getFoodsController));
router.post("/", addFoodValidation, asyncWrapper(addFoodController));
router.get("/:shopId", asyncWrapper(getShopIdController));

module.exports = router;
