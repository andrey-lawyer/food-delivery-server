const {
  addOrder,
  getAllOrders,
  getEmailUserOrders,
} = require("../services/orderService");

const addOrderController = async (req, res) => {
  const newOrder = req.body;
  await addOrder(newOrder);
  res.status(201).json({ status: "success" });
};

const getOrdersController = async (req, res) => {
  const orders = await getAllOrders();
  res.status(200).json(orders);
};

const getOrdersEmailController = async (req, res) => {
  const email = req.params.email;
  const data = await getEmailUserOrders(email);
  if (!data) {
    return res.status(404).json({ error: "Not found" });
  }
  res.status(200).json(data);
};

module.exports = {
  addOrderController,
  getOrdersController,
  getOrdersEmailController,
};
