const mongoose = require("mongoose");

module.exports.init = async function () {
  await mongoose.connect(
    "mongodb+srv://ujjwalmittal1033:JMIT2024@cluster0.bl59xc7.mongodb.net/eCommerce?retryWrites=true&w=majority"
  );
};
