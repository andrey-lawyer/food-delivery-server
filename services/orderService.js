const { Order } = require("../models/orderModel");

const getAllOrders = async () => {
  const orders = await Order.find({});
  return orders;
};

const getEmailUserOrders = async (emailUsers) => {
  const orders = await Order.find({
    email: emailUsers,
  });
  return orders;
};

const addOrder = async (newOrder) => {
  await Order.create(newOrder);
};

module.exports = {
  getAllOrders,
  addOrder,
  getEmailUserOrders,
};
