const usersRepoDB = require("../repositories/usersRepoDB");
const usersRepoJson = require("../repositories/usersRepoJson");


const getAllUsers = () => {
  return usersRepoDB.getUsers();
};

const getUserById = (id) => {
  return usersRepoDB.getUserById(id);
};

module.exports = {
  getAllUsers,
  getUserById,
};
