const axios = require('axios');
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
    return axios.get(USERS_URL);
};

const getUserById = (id) => {
    return axios.get(`${USERS_URL}?id=${id}`);
};

module.exports = {getUsers, getUserById};