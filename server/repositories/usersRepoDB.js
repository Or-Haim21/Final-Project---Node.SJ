const User = require("../models/user");

const getUsers = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById(id);
};

module.exports = {
  getUsers,
  getUserById,
};
