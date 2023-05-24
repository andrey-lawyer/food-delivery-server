const { addFood, getAllFoods, getShopId } = require("../services/foodService");

const addFoodController = async (req, res) => {
  const newFood = req.body;
  await addFood(newFood);
  res.status(201).json({ status: "success" });
};

const getFoodsController = async (req, res) => {
  const foods = await getAllFoods();
  res.status(200).json(foods);
};

const getShopIdController = async (req, res) => {
  const id = req.params.shopId;
  const data = await getShopId(id);
  if (!data) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(data);
};

module.exports = {
  addFoodController,
  getFoodsController,
  getShopIdController,
};
