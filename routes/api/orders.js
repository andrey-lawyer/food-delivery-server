const express = require("express");

const { addOrderValidation } = require("../../middlewars/validationMiddleware");

const { asyncWrapper } = require("../../helpers/apiHelper");

const {
  getOrdersController,
  addOrderController,
  getOrdersEmailController,
} = require("../../controllers/orderController");

const router = express.Router();

router.get("/", asyncWrapper(getOrdersController));
router.post("/", addOrderValidation, asyncWrapper(addOrderController));
router.get("/:email", asyncWrapper(getOrdersEmailController));

module.exports = router;
