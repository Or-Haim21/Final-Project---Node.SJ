const usersRepoDB = require("../repositories/usersRepoDB");


const getAllUsers = () => {
  return usersRepoDB.getUsers();
};

const getUserById = (id) => {
  return usersRepoDB.getUserById(id);
};

const getUserByName = async (name) => {
  return await usersRepoDB.getUserByName(name);
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByName
};
