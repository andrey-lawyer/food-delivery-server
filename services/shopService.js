const { Shop } = require("../models/shopModel");

const getAllShops = async () => {
  const shops = await Shop.find({});
  return shops;
};

const addShop = async (newShop) => {
  await Shop.create(newShop);
};

module.exports = {
  getAllShops,
  addShop,
};
