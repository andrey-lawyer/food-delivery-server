const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  nameFood: {
    type: String,
    required: [true, "name of food is required"],
  },
  photo: {
    type: String,
    required: [true, "photo is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  idShop: {
    type: String,
    required: [true, "id of shop is required"],
  },
  nameShop: {
    type: String,
    required: [true, "name of shope is required"],
  },
});

const Food = mongoose.model("foods", foodSchema);

module.exports = {
  Food,
};
