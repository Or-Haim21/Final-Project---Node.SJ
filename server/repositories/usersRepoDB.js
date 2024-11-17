const User = require("../models/user");

const getUsers = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById(id);
};

const getUserByName = async (name) => {
  try {
    return await User.findOne({ name });
  } catch (error) {
    console.error("Error fetching user by name:", error);
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserByName
};
