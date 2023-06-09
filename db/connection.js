const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (err) {
    process.exit(1);
  }
};

module.exports = {
  connectMongo,
};
