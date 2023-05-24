const Joi = require("joi");
const { ValidationError } = require("../helpers/errors");

const toValidation = (schema, req, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(
      new ValidationError(
        JSON.stringify(validationResult.error.details[0].message)
      )
    );
  }
};

const addFoodValidation = (req, res, next) => {
  const schema = Joi.object({
    nameFood: Joi.string().min(3).max(30).required(),
    photo: Joi.string().required(),
    price: Joi.number().required(),
    idShop: Joi.string().required(),
    nameShop: Joi.string().min(3).max(30).required(),
  });
  toValidation(schema, req, next);
  next();
};

const addCouponValidation = (req, res, next) => {
  const schema = Joi.object({
    discount: Joi.number().required(),
    image: Joi.string().required(),
  });
  toValidation(schema, req, next);
  next();
};

const addShopValidation = (req, res, next) => {
  const schema = Joi.object({
    nameShop: Joi.string().min(3).max(30).required(),
  });
  toValidation(schema, req, next);
  next();
};

const addOrderValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "ua"] },
      })
      .required(),
    phone: Joi.string().min(3).max(30).required(),
    address: Joi.string().min(5).max(60).required(),
    totalPrice: Joi.number().required(),
    idShop: Joi.string().required(),
    nameShop: Joi.string().min(3).max(30).required(),
    order: Joi.array()
      .items(
        Joi.object({
          product: Joi.string().min(3).max(30).required(),
          amount: Joi.number().required(),
          price: Joi.number().required(),
        })
      )
      .required(),
  });
  toValidation(schema, req, next);
  next();
};

module.exports = {
  addFoodValidation,
  addOrderValidation,
  addCouponValidation,
  addShopValidation,
};
