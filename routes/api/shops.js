const express = require("express");

const { addShopValidation } = require("../../middlewars/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelper");

const {
  getShopsController,
  addShopController,
} = require("../../controllers/shopController");

const router = express.Router();

router.get("/", asyncWrapper(getShopsController));
router.post("/", addShopValidation, asyncWrapper(addShopController));

module.exports = router;
