const User = require("../models/User");

module.exports = async (googleId) => {
  try {
    return await User.find({ googleId });
  } catch (error) {
    return null;
  }
};
