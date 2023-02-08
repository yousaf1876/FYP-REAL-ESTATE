const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  mobilenum: { type: Number, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: false, defaultValue: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
