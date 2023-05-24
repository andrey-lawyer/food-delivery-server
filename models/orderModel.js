const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name of user is required"],
  },
  email: {
    type: String,
    required: [true, " email is required"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"],
  },
  idShop: {
    type: String,
    required: [true, "id of shop is required"],
  },
  nameShop: {
    type: String,
    required: [true, "name of shop is required"],
  },
  order: [
    new mongoose.Schema(
      {
        product: {
          type: String,
          required: [true, "product is required"],
        },
        amount: {
          type: Number,
          required: [true, "amount is required"],
        },
        price: {
          type: Number,
          required: [true, "price is required"],
        },
      },
      { _id: false }
    ),
  ],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = {
  Order,
};
