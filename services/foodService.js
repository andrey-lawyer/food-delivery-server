const { Food } = require("../models/foodModel");

const getAllFoods = async () => {
  const foods = await Food.find({});
  return foods;
};

const getShopId = async (shopId) => {
   const shop = await Food.find({
    idShop: shopId,
  });
  return shop;
};

const addFood = async (newFood) => {
  await Food.create(newFood);
};

module.exports = {
  getAllFoods,
  addFood,
  getShopId,
};
