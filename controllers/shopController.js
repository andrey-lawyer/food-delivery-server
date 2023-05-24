const { addShop, getAllShops } = require("../services/shopService");

const addShopController = async (req, res) => {
  const newShop = req.body;
  await addShop(newShop);
  res.status(201).json({ status: "success" });
};

const getShopsController = async (req, res) => {
  const shops = await getAllShops();
  res.status(200).json(shops);
};

module.exports = {
  addShopController,
  getShopsController,
};
