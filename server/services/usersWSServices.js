const usersRepoJson = require("../repositories/usersRepoJson");


const getAllUsers = () => {
  return usersRepoJson.getUsers();
};

const getUserById = (id) => {
  return usersRepoJson.getUserById(id);
};

module.exports = {
  getAllUsers,
  getUserById,
};
