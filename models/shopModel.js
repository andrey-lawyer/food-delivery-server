const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  nameShop: {
    type: String,
    required: [true, "discount is required"],
  },
});

const Shop = mongoose.model("shops", shopSchema);

module.exports = {
  Shop,
};
